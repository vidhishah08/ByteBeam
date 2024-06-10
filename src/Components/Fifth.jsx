import React from "react";
import Fifth_bg from "./Fifth_Component/Fifth_bg";
import Fifth_cn from "./Fifth_Component/Fifth_cn";

const Fifth=()=>{
    return(
        <div>
            <div><Fifth_bg></Fifth_bg></div>
            <div className="mt-[-700px]"><Fifth_cn></Fifth_cn></div>
        </div>
    );
}

export default Fifth;