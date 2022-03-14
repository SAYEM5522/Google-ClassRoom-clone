import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useWindowSize } from '../useWindowSizw'
import ClassInformation from './ClassInformation'

const CreateClass = ({setCreateOpen,CreateOpen}) => {
  const {width, height} = useWindowSize();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '0px solid #fff',
    // boxShadow: 24,
    
  };
  return (
    <div >
      <Modal
      open={CreateOpen}
      onClose={()=>setCreateOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}  style={{width:width/2.35,height:height/1.56,backgroundColor:"#fff",borderRadius:"10px",}}>
          <ClassInformation/>
      </Box>
    </Modal>
    </div>
  )
}

export default CreateClass