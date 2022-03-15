import { Box, Modal } from '@mui/material'
import React from 'react'
import styles from "../css/Assignments/Assignments.module.css"
import { useWindowSize } from '../useWindowSizw'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AssignmentDetails from './AssignmentDetails'
const Assignments = ({setModal,modal}) => {
  const {width, height} = useWindowSize();

  return (
    <div>
       <Modal
      open={modal}
      onClose={()=>setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <motion.div initial={{scale:0.85,opacity:1}} animate={{scale:1,opacity:1}} transition={{type:"tween",duration:0.3}}>
      <Box  style={{width:width,height:height,backgroundColor:"#fff",borderWidth:"0px"}}>
        <AssignmentDetails setModal={setModal}/>
      </Box>
      </motion.div>
    </Modal>
     </div>
  )
}

export default Assignments