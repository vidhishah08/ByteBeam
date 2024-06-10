import React from "react";
import Icon from "../../Assets/icons.png"
import Iphone_13 from "../../Assets/iPhone_13.png"
import Iphone_14 from "../../Assets/iPhone 14.png"

const Header_cn=()=>{
    return(
        <div className="text-white mx-[104px] py-[64px]">
            <div>
                <div className="flex flex-row justify-between bg-customPurple bg-opacity-100">
                    <div><h1 className="text-[28px] font-semibold">ByteBeam</h1></div>
                    <div className="flex flex-row justify-between mb-[150px]">
                        <p className="px-[15px]">Home </p>
                        <p className="px-[15px]">Team</p>
                        <p className="px-[15px]"> Shops</p>
                        <p className="px-[15px]">FAQ</p>
                        <p className="pr-[25px]">About</p>
                        <button className="px-[25px] py-[2px] border-white border-[1px] rounded-3xl mt-[-10px]">Sign Up</button>
                    </div>
                </div>
                <div><img src={Icon} alt="icon" className="w-[300px] mb-[70px]"/></div>
                <div className="w-[500px] leading-[80px]"><p className=" font-light text-[88px]">Innovation In <span className="opacity-70">Developement</span><span className=" opacity-45"> Solutions</span></p></div>
                <div className="mt-[70px] ml-[50px]">
                    <p className="text-[14px] w-[450px]">At ByteBeam,we're passionate about pushing the boundries of technology and delivering cutting-edge developement solutions.Our team of experts in dedicated to crafting tailored solutions that drive your business forward.</p>
                    <div className="flex flex-row mt-[50px]"> 
                        <button className="px-[15px] py-[10px] mr-[10px] rounded-3xl bg-customPink">Try Now</button>
                        <button className="px-[15px] py-[10px] border-[1px] border-white rounded-3xl">Learn More</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={Iphone_13} alt="i13" className="ml-[700px] mt-[-580px] w-[450px]"/>
                <img src={Iphone_14} alt="i14" className="ml-[990px] mt-[-720px] "/>
            </div>
        </div>   
    );
}

export default Header_cn;