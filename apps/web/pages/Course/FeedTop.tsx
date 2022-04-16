import Image from 'next/image';
import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import styles from "../css/Course/FeedTop.module.css";
interface FeedTopProps {
  name: string;
  times: string;
  imgUrl: string;
}
const FeedTop = ({name,times,imgUrl}:FeedTopProps) => {
  return <div className={styles.feedtop}>
         <Image
      src={imgUrl}
      alt="Google"
      width={40}
      height={40}
      objectFit='cover'
      className='feed__avatar'
      />
      <div className={styles.feedtop__details}>
        <p className={styles.feed__name}>{name}</p>
        <p className={styles.feed__time}>{times}</p>
      </div>
      <BiDotsVerticalRounded className={styles.course__image__icon} size={24} color={" #5f6368"}/>
          </div>;
};

export default FeedTop;
