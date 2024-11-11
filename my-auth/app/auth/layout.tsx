import React from "react";

export default function Layout({children}:{children:React.ReactNode}){
    return (<div>
        <div>this banner is for both signup and sigin pages </div>
        {children}

    </div>);
}