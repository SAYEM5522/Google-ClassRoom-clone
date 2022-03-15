import React from 'react';
import CourseHeader from '../Course/CourseHeader';
import ClassWorkFeed from './ClassWorkFeed';
import ClassWorkHeader from './ClassWorkHeader';

const ClassWork = () => {
  return <div>

      <CourseHeader/>
      <div style={{width:"55%",height:"48px",marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
      <ClassWorkHeader/>
      </div>
      <div style={{width:"53%",height:"100%",marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
        <ClassWorkFeed/>
        <ClassWorkFeed/>
        <ClassWorkFeed/>
        <ClassWorkFeed/>

      </div>
  </div>;
};

export default ClassWork;
