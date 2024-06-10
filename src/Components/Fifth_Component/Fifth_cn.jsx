import React from "react";
import Image1 from "../../Assets/Image1.png"

const Fifth_cn=()=>{
    return(
            <div className=" text-white  mx-[104px] mt-[-800px]">
                <div className="flex flex-row justify-between">
                    <p className="text-[52px] font-light">See Our Work in Action</p>
                    <p className="text-[14px] w-[400px]">At ByteBeam, we take pride in the projects we've completed and the solutions we've delivered to our clients.Browse through our portdolio to see examples of our work across various industries and platforms.</p>
                </div>
                <div className=" bg-gradient-to-b from-customDarkPurple to-customLightPurple w-full h-[600px] mt-[50px] rounded-3xl">
                    <div className="flex flex-row px-[100px] py-[70px]">
                        <div className="w-[400px] mr-[50px]">
                            <h1 className="font-light pb-[40px] text-[24px] opacity-75">MOBILE APP</h1>
                            <p className="text-[52px] font-extralight leading-[50px]">ChatPGT Mobile <span className="opacity-65">App for ClosedAI</span></p>
                            <p className="pt-[25px] tex-[20px] opacity-75">Developed a custom mobile application for ABC Corporation to streamline internal processes and improve communication among employees.</p>
                            <p className="text-[22px] pt-[40px]">By Januar</p>
                            <p className="text-[24px] opacity-75 font-extralight">11 Jan 2022-5 min read</p>
                            <button className="px-[15px] py-[13px] rounded-3xl mt-[50px] ml-[280px] border-white border-[1px]">Learn More</button>
                        </div>
                        <div className="ml-[50px] mt-[50px]"><img src={Image1} alt="Image1" className="w-[600px]"/></div>
                    </div>
                </div> 
            </div>
        
    );
}

export default Fifth_cn;