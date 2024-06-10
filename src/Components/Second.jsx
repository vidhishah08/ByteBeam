import React from "react";
import Second_bg from "./Second_Component/Second_bg";
import Second_Content from "./Second_Component/Second_Content";

const Second=()=>{
    return(
        <div className="mb-[84px]">
            <Second_bg></Second_bg>
            <div className="mt-[-1100px]"><Second_Content></Second_Content></div>
        </div>
    );
}

export default Second;