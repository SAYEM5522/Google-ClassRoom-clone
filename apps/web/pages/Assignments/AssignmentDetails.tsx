import React from 'react'
import JoinClassHeader from '../JoinClass/JoinClassHeader'

const AssignmentDetails = ({setModal}) => {
  return (
    <div>
      <JoinClassHeader setModal={setModal} name={"Assignment"} button={"Assign"}/>
    </div>
  )
}

export default AssignmentDetails