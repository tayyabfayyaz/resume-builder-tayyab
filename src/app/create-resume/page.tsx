'use client'

import DotPattern from "@/components/ui/dot-pattern";
import ShineBorder from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";



function CreateResume(){

    const [fullName, setfullname] = useState<string>("");
    const [fatherName, setfathername] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [CNIC, setcnic] = useState<string>("");
    const [address1, setaddress1] = useState<string>("");
    const [address2, setaddress2] = useState<string>("");
    const [dob, setdob] = useState<string>("");
    const [phoneNo, setphoneNo] = useState<string>("");
    const [skills, setskills] = useState<string>("")
    const [education, seteducation] = useState<string>("");
    const [experience, setexperience] = useState<string>("");
    const [objective, setobjective] = useState<string>("");

    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setfullname(searchParams.get("fullName") || "");
        setfathername(searchParams.get("fatherName") || "");
        setcnic(searchParams.get("CNIC") || "");
        setemail(searchParams.get("email") || "");
        setaddress1(searchParams.get("address1") || "");
        setaddress2(searchParams.get("address2") || "");
        setdob(searchParams.get("dob") || "");
        setskills(searchParams.get("skills") || "");
        setphoneNo(searchParams.get("phoneNo") || "");
        seteducation(searchParams.get("education") || "");
        setexperience(searchParams.get("experience") || "");
        setobjective(searchParams.get("objective") || "");
    }, [searchParams]);

    const handleSubmit = () => {
        const queryString = new URLSearchParams({
            fullName: fullName || "",
            fatherName: fatherName || "",
            email: email || "",
            CNIC: CNIC || "",
            address1: address1 || "",
            address2: address2 || "",
            dob: dob || "",
            skills: skills || "",
            phoneNo: phoneNo || "",
            education: education || "",
            experience: experience || "",
            objective: objective || "",
        }).toString();
    
        router.push(`/ready-resume?${queryString}`);
    };

    return(
        <main>
            <div className="resume_form w-full md:w-full lg:w-fit xl:w-fit h-fit py-5 px-5 block mx-1 md:mx-5 lg:mx-auto xl:mx-auto my-10 relative">
                <ShineBorder>
                <form action="" method="post">
                    <label className="text-xl ml-5 ">Name</label>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={fullName}
                        id="full_name" 
                        onChange={(e) => setfullname(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Father Name</label>
                    <input
                        type="text" 
                        placeholder="Father Name" 
                        value={fatherName} 
                        id="father_name"
                        onChange={(e) => setfathername(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">CNIC No.</label>
                    <input
                        type="text"
                        placeholder="1234-12345678-9"
                        value={CNIC}
                        id="cnic"
                        onChange={(e) => setcnic(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Address</label>
                    <input
                        type="text"
                        placeholder="House No. 21, Sector "
                        value={address1}
                        id="address_1"
                        onChange={(e) => setaddress1(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Adress 2</label>
                    <input
                        type="text"
                        placeholder="Korangi, Karachi"
                        value={address2}
                        id="address_2"
                        onChange={(e) => setaddress2(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Date Of Birth</label>
                    <input
                        type="date"
                        value={dob}
                        id="dob"
                        placeholder="Select Your Date"
                        onChange={(e) => setdob(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Phone No.</label>
                    <input
                        type="text"
                        placeholder="Phone No."
                        value={phoneNo}
                        id="phone"
                        onChange={(e) => setphoneNo(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Email</label>
                    <input
                        type="email"
                        placeholder="example123@abc.com"
                        value={email}
                        id="email"
                        onChange={(e) => setemail(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Skills</label>
                    <input
                        type="text"
                        placeholder="Web Development"
                        value={skills}
                        id="skill"
                        onChange={(e) => setskills(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-12 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    />

                    <label className="text-xl ml-5 ">Objective</label>
                    <textarea
                        value={objective}
                        id="objective"
                        placeholder="Write objective according to your profession"
                        onChange={(e) => setobjective(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-20 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    ></textarea>

                    <label className="text-xl ml-5 ">Education</label>
                    <textarea
                        value={education}
                        id="education"
                        placeholder="Metric (Computer Scince) from abc School"
                        onChange={(e) => seteducation(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-20 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    ></textarea>

                    <label className="text-xl ml-5 ">Experience</label>
                    <textarea
                        placeholder="Experience"
                        value={experience}
                        id="experience"
                        onChange={(e) => setexperience(e.target.value)}
                        className="block w-full md:w-full lg:w-[600px] xl:w-[600px] h-20 px-5 mx-0 md:mx-0 lg:mx-5 xl:mx-5 my-5 border-2 rounded-lg"
                    ></textarea>

                    <button
                        id='submit_btn'
                        type='button'
                        onClick={handleSubmit}
                        className="block mx-auto py-3 px-4 my-10 font-bold borer-2 border-black duration-300 rounded-2xl hover:bg-gray-400 hover:text-white"
                    >
                        Submit
                    </button>

                    

                </form>
                </ShineBorder>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
        </main>
    );
};


export default function SuspenseWrapper() {
    return (
        <Suspense fallback={<div>Loading form...</div>}>
            <CreateResume />
        </Suspense>
    );
}