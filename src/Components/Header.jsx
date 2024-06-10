import React from "react";
import Header_bg from "./Header/Header_bg";
import Header_cn from "./Header/Header_cn";

const Header=()=>{
    return(
        <div>
            <div><Header_bg></Header_bg></div>
            <div className="mt-[-950px]"><Header_cn></Header_cn></div>
        </div>
    );
}

export default Header;