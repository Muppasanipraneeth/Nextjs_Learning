import React from "react";

 export default function Layout({children}:{children:React.ReactNode}){
    return (<div >
        <div>50 % of for next 50days</div>
        {children}
    </div>);

}