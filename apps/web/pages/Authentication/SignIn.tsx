import Image from 'next/image'
import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import styles from "../css/Authentication/SignIn.module.css"
import { useWindowSize } from '../useWindowSizw'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectGoogleID, setGoogleID, setUser } from '../features/ClassRoomList'
const SignIn = () => {
  const {width, height} = useWindowSize();
  const dispatch=useDispatch();
  const gid=useSelector(selectGoogleID);
  console.log(gid)
  const client__id="158609113954-ohvnc6ousgfb6tjfs4ju5v7e9vpbunbg.apps.googleusercontent.com"
  const responseSuccess =async (response:any) => {
    const { email, name, googleId,imageUrl } = response.profileObj;
    const data = {
      email,
      name,
      googleId,
      imageUrl
    }
    await axios.post('http://localhost:5000/signin', data).
    then(res => {
      dispatch(setGoogleID({
        googleId:res.data.googleId
      }))
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const responseFailure = (response:any) => {
    console.log(response)
  }
  // const getUser=({response})=>{
  //     axios.post('http://localhost:5000/CreateClass',{})
  //     .then(res=>{
  //       setUser(res.data)
  //     })
  //   }
  //  useEffect(()=>{
  //   getUser(),
  //     ()=> getUser() 
  //  },[])
  // const getdata=()=>{
  //   axios.get(`http://localhost:5000/signin?id=${gid}`)
  //   .then(res=>{
  //   dispatch(setUser({
      
  //     Email:res.data[0]?.email,
  //     Name:res.data[0]?.name,
  //     ImageUrl:res.data[0]?.imageUrl,
      
  //   }))
  //   })
  // }
  // useEffect(()=>{
  //    getdata(),
  //    ()=>getdata()
  // },[])
    
  return (
    <div>
      <div style={{height:(height/1.1)/2,backgroundColor:"whitesmoke",borderTopLeftRadius:"40px",borderTopRightRadius:"40px"}}>
      <div style={{marginLeft:"200px",borderTopLeftRadius:"40px",borderTopRightRadius:"40px",paddingTop:"40px"}}>
        <Image
          src="/../public/glogo1.png"
          alt="Google"
          width={200}
          height={150}
          objectFit='cover'
          className='glogo'
        />
        <style jsx global>{`
        .glogo {
          border-radius: 5% !important;
          
        }
      `}</style>
      </div>
      <h2 className={styles.Authentication__Text} >
        Classroom helps classes communicate, save time, and stay organized. 
      </h2>
      </div>
      <GoogleLogin
    clientId={client__id}
    render={renderProps => (
      <div onClick={renderProps.onClick} className={styles.SignInText}>
        <p>Sign In</p>
      </div>
    )}
    buttonText="Login"
    onSuccess={responseSuccess}
    onFailure={responseFailure}
    cookiePolicy={'single_host_origin'}
  />
      
      <p className={styles.BottomText}>By joining, you agree to share contact information with people in your class</p>

    </div>
  )
}

export default SignIn