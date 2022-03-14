import Image from 'next/image'
import React from 'react'
import styles from "../css/JoinClass/JoinFeed.module.css"
const joinFeed = () => {
  return (
    <div>
      <div className={styles.JoinFeed1}>
        <p className={styles.JoinFeed1__Top}>
        You're currently signed in as
        </p>
        <div  className={styles.JoinFeed1__infor}>
      <div>
        <Image
      src={"/../public/avt5.jpg"}
      alt="Google"
      width={40}
      height={40}
      objectFit='cover'
      className='feed__avatar'
      />
      </div>
      <div style={{flex:1,marginLeft:"15px"}}>
        <p className={styles.JoinFeed1__name}>md sayem</p>
        <p className={styles.JoinFeed1__email}>md1040582@gmail.com</p>
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