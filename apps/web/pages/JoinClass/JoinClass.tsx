import React from 'react'
import {useWindowSize} from "../useWindowSizw";
const JoinClass = () => {
  const {width, height} = useWindowSize();
  return (
    <div>{width}</div>
  )
}

export default JoinClass