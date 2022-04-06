import Image from 'next/image'
import React from 'react'
import styles from "../css/Authentication/SignIn.module.css"
import { useWindowSize } from '../useWindowSizw'

const SignIn = () => {
  const {width, height} = useWindowSize();

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
      <div className={styles.SignInText}>
        <p>Sign In</p>
      </div>
      <p className={styles.BottomText}>By joining, you agree to share contact information with people in your class</p>

    </div>
  )
}

export default SignIn