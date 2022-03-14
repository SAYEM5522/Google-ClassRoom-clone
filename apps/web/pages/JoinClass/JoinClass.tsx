import React from 'react'
import JoinClassHeader from './JoinClassHeader'
import JoinFeed from "./joinFeed"
const JoinClass = ({setModal}) => {
  return (
    <div>
      <JoinClassHeader setModal={setModal}/>
      <div style={{
        width:"42%",
        height:"100%",
        marginLeft:"auto",
        marginRight:"auto",
      }} >
        <JoinFeed/>
      </div>
    </div>
  )
}

export default JoinClass