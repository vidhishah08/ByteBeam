import React from "react";
import Capture from "../../Assets/Capture.png"
import Iphone_14 from "../../Assets/iPhone 14.png"
import Capture1 from "../../Assets/Capture1.png"
import Capture2 from "../../Assets/Capture2.png"
import Capture3 from "../../Assets/Capture3.png"

const Second_Content=()=>{
    return(
        <div className="mx-[104px] pt-[100px] text-white">
            <h1 className="font-thin text-[24px]">WHY US</h1>
            <div className="flex flex-row justify-between">
                <p className="text-[52px] leading-[55px] w-[800px] pt-[10px] font-light">Why Choose ByteBeam for Your <span className=" opacity-65">Developement Needs?</span> </p>
                <p className="w-[400px] pt-[14px]">At ByteBeam, we understand that choosing the right developement partner is crucial for the success of your project.Here are four compelling reasons why we stand out from the crowd:</p>
            </div>
            <div className="flex flex-row justify-between mt-[100px]">
                <div className=" bg-white backdrop-blur-lg bg-opacity-10 px-[35px] py-[40px] rounded-2xl flex flex-row w-[620px]">
                    <div><img src={Capture} alt="capture" className="w-[80px] pt-[-10px]"/></div>
                    <div>
                        <p className="text-[26px] w-[100px] mt-[-10px] px-[10px] pt-[10px] leading-tight ">Experienced Professionals</p>
                        <p className="text-[16px] w-[350px] px-[10px] pt-[22px] ">Our team consists of seasoned professionals with years of experience in the industry.From skilled developers to creative designers,we have the expeties to bring your ideas to life.</p>
                    </div>
                    <div><img src={Iphone_14} alt="i14" className="w-[190px] mt-[-80px]"/></div>
                </div>
                <div className=" bg-white backdrop-blur-lg bg-opacity-10 px-[35px] py-[40px] rounded-2xl flex flex-row w-[620px]">
                    <div><img src={Capture1} alt="capture1" className="w-[80px] pt-[-10px]"/></div>
                    <div>
                        <p className="text-[26px] w-[100px] mt-[-10px] px-[10px] pt-[10px] leading-tight">Customized Solutions</p>
                        <p className="text-[16px] w-[350px] px-[10px] pt-[18px]">We don't believe in one-size-fits -all solutions.At byteBeam,we take the time to understand your unique needs and craft customized solutions that perfectly align with your goals and objectives.</p>
                    </div>
                    <div><img src={Iphone_14} alt="i14" className="w-[190px] mt-[-80px]"/></div>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-[80px]">
                <div className=" bg-white backdrop-blur-lg bg-opacity-10 px-[35px] py-[40px] rounded-2xl flex flex-row w-[620px]">
                    <div><img src={Capture2} alt="capture2" className="w-[80px] pt-[-10px]"/></div>
                    <div>
                        <p className="text-[26px] w-[180px] mt-[-10px] px-[10px] pt-[10px] leading-tight">Cutting-edge Technology</p>
                        <p className="text-[16px] w-[350px] px-[10px] pt-[22px]">We stay ahead of the curve by leveraging the latest tools and technologies in our developement process. From blockchain to artificial intelligence, we harness the power of innovation to diliver exceptional results.</p>
                    </div>
                    <div><img src={Iphone_14} alt="i14" className="w-[190px] mt-[-60px]"/></div>
                </div>
                <div className=" bg-white backdrop-blur-lg  bg-opacity-10 px-[35px] py-[40px] rounded-2xl flex flex-row w-[620px] bac">
                    <div><img src={Capture3} alt="capture3" className="w-[80px] pt-[-10px]"/></div>
                    <div>
                        <p className="text-[26px] w-[100px] mt-[-10px] px-[10px] pt-[10px] leading-tight">Dedicated Support</p>
                        <p className="text-[16px] w-[350px] px-[10px] pt-[18px]">Your satisfaction is our top priority. We go above and beyond to provide personalized support and guidance throughout the developement process,ensuring that your project is completed to your utmost satisfaction.</p>
                    </div>
                    <div><img src={Iphone_14} alt="i14" className="w-[190px] mt-[-60px]"/></div>
                </div>
            </div>
        </div>
    );
}

export default Second_Content;