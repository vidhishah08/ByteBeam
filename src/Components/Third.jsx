import React from "react";
import Frame1 from "../Assets/Frame_1.png"
import Frame2 from "../Assets/Frame2.png"

const Third=()=>{
    return(
        <div className=" bg-gradient-to-br from-customPink from-[-30%] via-customLightPurple via-8% to-customMediumPurple to-60% w-full h-[1000px]  py-[100px] text-white mt-[-11px]">
            <div className="mx-[104px] flex flex-row justify-between">
                <h1 className=" text-customPink font-light text-[24px]">FEATURES</h1>
                <div className="w-[600px]">
                    <p className="text-[52px]  leading-[50px] w-[600px] font-light">Unlock Powerful Features <span className="opacity-65">With ByteBeam</span></p>
                    <p className="py-[40px]">At ByteBeam, we offer a range of powerful features designed to take your developement projects to the next level.Discover how our innovative solutions can help you achieve your goals.</p>
                    <button className="bg-customPink px-[22px] py-[10px] mt-[25px] rounded-3xl">Explore Features</button>
                </div>
            </div>
            <div className="flex flex-row mx-[104px] mt-[100px]">
                <div className="w-[600px] mr-[20px]">
                   <img src={Frame1} alt="Frame1"/>
                   <p className="pt-[10px] text-[30px] font-extralight">Seamless Integration</p>
                   <p className="text-[14px] font-light">Integrate our solutions seamlessly with your existing systems and platforms, ensuring smooth operation and enhanced efficiency.</p> 
                </div>
                <div className="w-[600px] mr-[20px]">
                    <img src={Frame2} alt="Frame2"/>
                    <p className="pt-[10px] text-[30px] font-extralight">Scalability</p>
                    <p className="text-[14px] font-light">Our solutions are designed to grow with yur business.Whether you're a startu or an enterprise, our scalable solutions adapt to your changing needs.</p>
                </div>
                <div className="w-[600px]">
                    <img src={Frame2} alt="Frame2"/>
                    <p className="pt-[10px] text-[30px] font-extralight">Robust Security</p>
                    <p className="text-[14px] font-light">Protect your data and assets with our robust measures. From encryption to authentication prioritize the security of your information.</p>
                </div>
            </div>
        </div>
    );
}

export default Third;