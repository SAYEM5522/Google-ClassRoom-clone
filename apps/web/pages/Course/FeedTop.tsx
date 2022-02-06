import Image from 'next/image';
import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import styles from "../css/Course/FeedTop.module.css";
const FeedTop = () => {
  return <div className={styles.feedtop}>
         <Image
      src={"/../public/avt5.jpg"}
      alt="Google"
      width={40}
      height={40}
      objectFit='cover'
      className='feed__avatar'
      />
      <div className={styles.feedtop__details}>
        <p className={styles.feed__name}>Semonti Barua 2012758042</p>
        <p className={styles.feed__time}>2 hours ago</p>
      </div>
      <BiDotsVerticalRounded className={styles.course__image__icon} size={24} color={" #5f6368"}/>
          </div>;
};

export default FeedTop;
