import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styls from "./css/Item.module.css";
const Item = () => {
  const {query}=useRouter();
  const router=useRouter();
  const onClick:React.MouseEventHandler<HTMLHeadingElement>=useCallback((e)=>{
},[])
  return (
    <div>
      <h1 className={styls.item}>jeeeee</h1>
      <p onClick={onClick}>{query.id}</p>
    </div>
  )
};

export default Item;
