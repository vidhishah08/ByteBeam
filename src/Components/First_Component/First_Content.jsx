import React from "react";
import Image from "../../Assets/image.png"

const First_Content=()=>{
    return(
        <div className="bg-gradient-to-b from-customPurple to-customLightPurple w-[1360px]  mx-[80px] rounded-3xl pb-[60px]">
            <div className="text-white py-[100px] px-[50px] flex flex-row justify-between">
                <div className="leading-[50px]"><p className="text-[52px] font-light w-[450px]">Crafting Innovative <span className="opacity-65">Solutions Since</span></p></div>
                <div className="w-[600px]">
                    <p>At ByteBeam, we're more than just a developement agency - we're your partners in progress.Established in 2001, our journey has been fueled by a relentless commitment to excellence and a passion for pushing the boundaries of technology.From crafting elegent websites to building robust mobile applications, our dedicated team of experts works tirelessly to bring your ideas to life.</p>
                    <p className="pt-[50px]">Driven by innovation and guided by integrity,we believe in the transformative power of technology to drive positive change.with a focus on understanding your unique needs and challenges, we collaborate closely with you to deliver bespoke solutions that exceed expectations.</p>
                    <p className="pt-[50px]">At ByteBeam, our mission is clear:to empower your vision with tailored developement solutions that not only meet your requirements but also surpass your wildest dreams.Join us on this exciting journey and experience the ByteBeam difference today.</p>
                </div>
            </div>
            <div><img src={Image} alt="image" className="mx-[70px] w-[1225px] h-[500px]"/></div>
        </div>
    );
}

export default First_Content;