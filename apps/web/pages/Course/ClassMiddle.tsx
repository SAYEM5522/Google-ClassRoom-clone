import React from 'react';
import styles from "../css/Course/ClassMiddle.module.css"
interface ClassMiddleProps{
  list: {
    id: string;
    name: string;
}
}
const ClassMiddle = ({list}:ClassMiddleProps) => {
  return <div className={styles.classmiddle}>
    <p className={styles.classmiddle__name}>{list.name}</p>
  </div>;
};

export default ClassMiddle;
