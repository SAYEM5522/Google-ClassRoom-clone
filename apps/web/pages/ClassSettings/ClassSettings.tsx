import React from 'react'
import styles from "../css/ClassSettings/ClassSettings.module.css"
import ClassSettingEdit from './ClassSettingEdit'
import ClassSettingHeader from './ClassSettingHeader'
const ClassSettings = () => {
  return (
           <div>
          <ClassSettingHeader/>
          <ClassSettingEdit/>
          </div>
  )
}

export default ClassSettings