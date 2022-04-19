import React from 'react'
import { useCallback } from 'react'
import { FiMenu } from 'react-icons/fi'
import styles from "../css/Header/Header.module.css"
const HeaderMenue = ({open,setOpen}:any) => {
  const onClick = useCallback(() => {
    setOpen(true)
  }, [open])
  return (
    <FiMenu size={22} className={styles.header__Icon} onClick={onClick} />
  )
}

export default HeaderMenue