import React from "react";

const Fourth_cn=()=>{
    return(
        <div className="bg-white backdrop-blur-lg bg-opacity-10 h-[750px] mx-[104px] rounded-xl text-white flex flex-row">
            <div className="px-[80px] py-[80px]">
                <p className="text-[32px] font-extralight">Start The Project</p>
                <button className=" bg-customPink px-[15px] py-[12px] rounded-3xl mt-[20px]">Contact Our Team</button>
            </div>
            <div className="w-[600px] ml-[300px] mt-[60px]">
                <p className="text-[52px] font-extralight">Leave us a message</p>
                <div className="mt-[20px] font-thin flex flex-row mb-[30px]">
                    <div>
                        <label htmlFor="Name">First Name</label><br />
                        <input type="text" className="bg-white bg-opacity-25 rounded-md px-[18px] py-[10px] mt-[10px]"/>
                    </div>
                    <div className="ml-[30px]">
                        <label htmlFor="Email">Email</label><br />
                        <input type="text" className="bg-white bg-opacity-25 rounded-md px-[18px] py-[10px] mt-[10px]"/>  
                    </div>
                </div>
                <label htmlFor="Message" className="text-[18px] font-thin">Message</label><br />
                <textarea className="bg-white bg-opacity-25 w-[520px] h-[200px] mt-[15px] rounded-lg"/><br />

                <input className="mt-[45px] " type="checkbox"/> 
                <label className="text-[18px] font-thin ml-[15px]">I accept the terms & conditions</label><br />

                <button className=" bg-customPink px-[20px] py-[8px] mt-[50px] rounded-lg">Submit</button>
            </div>
        </div>
    );
}

export default Fourth_cn;