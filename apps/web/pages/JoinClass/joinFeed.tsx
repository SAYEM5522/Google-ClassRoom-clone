import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../css/JoinClass/JoinFeed.module.css"
import { selectEmail, selectImageUrl, selectName } from '../features/ClassRoomList'
const joinFeed = () => {
  const name=useSelector(selectName)
  const email=useSelector(selectEmail)
  const image=useSelector(selectImageUrl)
  console.log(image)
  return (
    <div>
      <div className={styles.JoinFeed1}>
        <p className={styles.JoinFeed1__Top}>
        You're currently signed in as
        </p>
        <div  className={styles.JoinFeed1__infor}>
      <div>
        <Image
      src={image}
      alt="Google"
      width={40}
      height={40}
      objectFit='cover'
      className='feed__avatar'
      />
      </div>
      <div style={{flex:1,marginLeft:"15px"}}>
        <p className={styles.JoinFeed1__name}>{name}</p>
        <p className={styles.JoinFeed1__email}>{email}</p>
      </div>
      <div className={styles.JoinFeed1__button}>
        <p>Switch Account</p>
      </div>
        </div>
      </div>
      <div className={styles.JoinFeed2}>
        <h4>
        Class code
        </h4>
        <p>
        Ask your teacher for the class code, then enter it here.
        </p>
        <input  placeholder='Class code' className={styles.JoinFeed2__input}/>
      </div>
    </div>
  )
}

export default joinFeed