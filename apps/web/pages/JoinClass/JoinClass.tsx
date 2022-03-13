import React,{useState} from 'react'
import styles from "../css/JoinClass/JoinClass.module.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useWindowSize} from "../useWindowSizw";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const JoinClass = () => {
  const {width, height} = useWindowSize();
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        </Box>
      </Modal> */}
    </div>
  )
}

export default JoinClass