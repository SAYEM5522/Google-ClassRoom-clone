import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

export const Item = () => {
  const router=useRouter();
  const onClick=React.useCallback(()=>{
      router.push("/")
  },[])
  return <div>
    <h1 onClick={onClick}>yoo</h1>
  </div>;
};
