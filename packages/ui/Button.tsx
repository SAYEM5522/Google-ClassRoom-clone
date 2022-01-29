import * as React from "react";
export const Button = () => {
  const onClick=React.useCallback(()=>{
        console.log("click");
  },[])
  return <button onClick={onClick}>Boop</button>;
};
