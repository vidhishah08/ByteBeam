import React from "react";
import Facebook from "../Assets/Facebook.png"
import Instagram from "../Assets/Instagram.png"
import X from "../Assets/X.png"
import LinkedIn from "../Assets/LinkedIn.png"

const Footer=()=>{
    return(
        <div className=" bg-customLastPurple mt-[66px] w-full h-[280px] px-[104px] py-[60px] text-white">
            <div className="flex flex-row justify-between pb-[60px]">
                <p className="text-[30px] font-medium">ByteBeam</p>
                <div className="text-[24px] font-light flex flex-row justify-between">
                    <p className="pr-[20px]">Home</p>
                    <p className="pr-[20px]">Team</p>
                    <p className="pr-[20px]">Steps</p>
                    <p className="pr-[20px]">FAQ</p>
                    <p>About</p>
                </div>
                <div className="flex flex-row mr-[104px]">
                    <img src={Facebook} alt="f" className="pr-[10px]"/>
                    <img src={Instagram} alt="i" className="pr-[10px]"/>
                    <img src={X} alt="x" className="pr-[10px]"/>
                    <img src={LinkedIn} alt="l" className="pr-[10px]"/>
                </div>
            </div>
            <hr />
            <div className="flex flex-row pl-[288px] font-thin mt-[40px]">
                <p className="text-[16px] pr-[30px]">@2024 SLAB.All Rights Reserved.</p>
                <p className="opacity-75 text-[16px] pr-[30px]">Privacy Policy</p>
                <p className="opacity-75 text-[16px] pr-[30px]">Terms of Services</p>
                <p className="opacity-75 text-[16px]">Cookies Settings</p>
            </div>
        </div>
    );
}

export default Footer;