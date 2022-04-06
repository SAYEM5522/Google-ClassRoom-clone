import { Modal } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import { Box } from '@mui/system'
import { useWindowSize } from '../useWindowSizw'
import SignIn from './SignIn'

const Authentication = () => {
  const {width, height} = useWindowSize();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '4px solid #fff',
    borderColor: '#fff',
    // boxShadow: 24,
    
  };
  return (
    <div style={{flex:1}}>
      <Header/>
      <div>
      <Modal
      open={true}
      // onClose={()=>setCreateOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
       >
      <Box sx={style}  style={{width:width/2.05,height:height/1.1,backgroundColor:"#fff",borderRadius:"40px",}}>
        <SignIn/>
      </Box>
    </Modal>
      </div>
    </div>
  )
}

export default Authentication