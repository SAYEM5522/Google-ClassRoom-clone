import React from 'react';
import styles from "../css/People/ClassMates.module.css";
import Students from './Students';
const ClassMates = () => {
  return <div className={styles.classmates}>
      <div className={styles.classmates__top}>
          <h1>Classmates</h1>
          <p>36 students</p>
      </div>
      <div className={styles.classmates__line}/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>
      <Students/>

  </div>;
};

export default ClassMates;
