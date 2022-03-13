import React, { useCallback,useState } from 'react'
import styles from "../css/JoinClass/JoinClass.module.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useWindowSize } from '../useWindowSizw'
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

const PopUpView = ({setModal,modal}) => {
  const {width, height} = useWindowSize();

  return (
    <div>

  </div>
  )
}

export default PopUpView