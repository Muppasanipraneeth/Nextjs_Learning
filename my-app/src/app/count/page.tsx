"use client"

import { useState } from "react";

export default function Count  (){
    const [count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        setcount(count-1);
    }
    return (<div>
<button  onClick={increment}>Add</button>
<button onClick={decrement}>min</button>
<div>count is {count}</div>
    </div>);
}