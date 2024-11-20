'use client';

import { FaAngleDown } from "react-icons/fa";
import { MdPhoneInTalk, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";



const ReadyResume: React.FC = () => {

    const resumeRef = useRef<HTMLDivElement | null>(null);
    
    const handleDownloadButton = async () => {
        if(resumeRef.current){
            const element = resumeRef.current;
            const canvas = await html2canvas(element);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("portrait", "px", "a4");

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

            pdf.save('resume.pdf');
        };
    };
    
    const searchParams = useSearchParams();

    const fullName = searchParams.get("fullName") || "N/A";
    const fatherName = searchParams.get("fatherName") || "N/A";
    const CNIC = searchParams.get("CNIC") || "N/A";
    const address1 = searchParams.get("address1") || "N/A";
    const address2 = searchParams.get("address2") || "N/A";
    const dob = searchParams.get("dob") || "N/A";
    const skills = searchParams.get("skills") || "N/A";
    const education = searchParams.get("education") || "N/A";
    const experience = searchParams.get("experience") || "N/A";
    const objective = searchParams.get("objective") || "N/A";
    const phoneNo = searchParams.get("phoneNo") || "N/A";
    const email = searchParams.get("email") || "N/A";

    return(
        <main className="bg-gray-100 min-h-screen py-10 flex flex-col justify-center items-center">
            <div
                ref={resumeRef}
                className="paper_size bg-white w-[90%] md:w-[70%] lg:w-[60%] shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row mt-20 py-10"
            >
                {/* Left Sidebar */}
                <div className="left_container bg-gradient-to-b from-gray-700 to-gray-500 w-full lg:w-1/3 p-5 rounded-lg lg:rounded-l-lg">
                {/* About Me */}
                <div className="heading bg-gray-800 text-white text-2xl text-center py-3 font-bold rounded-md mb-5">
                    <h3>About Me</h3>
                </div>
                <ul className="text-white text-sm space-y-3">
                    <li>
                    <label className="block text-xs font-semibold text-gray-300">Name</label>
                    <p className="text-lg font-medium">{fullName || "N/A"}</p>
                    </li>
                    <li>
                    <label className="block text-xs font-semibold text-gray-300">Father Name</label>
                    <p className="text-sm">{fatherName || "N/A"}</p>
                    </li>
                    <li>
                    <label className="block text-xs font-semibold text-gray-300">CNIC</label>
                    <p className="text-sm">{CNIC || "N/A"}</p>
                    </li>
                    <li>
                    <label className="block text-xs font-semibold text-gray-300">Address</label>
                    <p className="text-sm">{address1 || "N/A"}</p>
                    <p className="text-sm">{address2 || "N/A"}</p>
                    </li>
                    <li>
                    <label className="block text-xs font-semibold text-gray-300">Date of Birth</label>
                    <p className="text-sm">{dob || "N/A"}</p>
                    </li>
                </ul>

                {/* Skills */}
                <div className="heading bg-gray-800 text-white text-2xl text-center py-3 font-bold rounded-md mt-8 mb-5">
                    <h3>Skills</h3>
                </div>
                     <ul className='text-white text-sm list-disc ml-12 leading-10 my-5'>
                         <li>{skills || "N/A"}</li>
                     </ul>

                     <div className="heading w-full bg-gray-700 text-white text-2xl text-center my-5 py-3 font-bold">
                         <h3>Contact Me</h3>
                     </div>

                     <p className='flex gap-2 text-white text-sm my-2'><MdPhoneInTalk className='mt-2' /> {phoneNo || "N/A"}</p>
                     <p className='flex gap-2 text-white text-sm my-2'><MdOutlineEmail className='mt-2' /> {email || "N/A"}</p>
                     <p className='flex gap-2 text-white text-sm my-2'><MdLocationOn className='mt-2' /> {address2 || "N/A"}</p>
                     
                </div>

                {/* Right Content */}
                <div className="right_container bg-white w-full lg:w-2/3 p-5">
                {/* Name and Contact */}
                <div className="name_heading pb-5 text-center">
                    <h2 className="text-gray-900 text-4xl font-extrabold">{fullName || "N/A"}</h2>
                    <h3 className="text-white text-lg mt-5 font-bold py-2 bg-gray-700 rounded-md">
                    {email || "N/A"}
                    </h3>
                </div>

                {/* Objective */}
                <div className="heading bg-gray-800 text-white text-lg py-2 px-4 font-bold rounded-r-full shadow-md mb-5">
                    <h3>Objective</h3>
                </div>
                <p className="text-gray-700 text-sm ml-5 mb-5">{objective || "N/A"}</p>

                {/* Education */}
                <div className="heading bg-gray-800 text-white text-lg py-2 px-4 font-bold rounded-r-full shadow-md mb-5">
                    <h3>Education</h3>
                </div>
                <p className="text-gray-700 text-sm ml-5 mb-5">{education || "N/A"}</p>

                {/* Experience */}
                <div className="heading bg-gray-800 text-white text-lg py-2 px-4 font-bold rounded-r-full shadow-md mb-5">
                    <h3>Experience</h3>
                </div>
                <p className="text-gray-700 text-sm ml-5 mb-5">{experience || "N/A"}</p>

                {/* Reference */}
                <div className="heading bg-gray-800 text-white text-lg py-2 px-4 font-bold rounded-r-full shadow-md mb-5">
                    <h3>Reference</h3>
                </div>
                <p className="text-gray-700 text-sm ml-5 mb-5">Available on request</p>

                {/* Save PDF Button */}
                </div>
            </div>
                <button
                    id="pdf_btn"
                    type="button"
                    onClick={handleDownloadButton}
                    className="block mx-auto py-3 px-6 my-5 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 shadow-md"
                >
                    Save as PDF
                </button>
            </main>

    );
};

export default ReadyResume;








