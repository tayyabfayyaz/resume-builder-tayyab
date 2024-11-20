import Image from 'next/image';
import { FaAngleDown } from "react-icons/fa";
import { MdPhoneInTalk, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { TbWorldCode } from "react-icons/tb";




function ResumePage(){
    return(
        <main>
            <div className="paper_size bg-white w-full h-fit py-10 flex">
                <div className="left_container bg-gray-500 w-1/3 h-fit mx-8 rounded-t-full">
                    <Image 
                        src='/tayyabpic.jpg'
                        alt="Profile Image"
                        width={400}
                        height={400}
                        className='w-[250px] h-[250px] rounded-full block mx-auto my-10'
                    />

                    <div className="heading w-full bg-gray-700 text-white text-2xl text-center my-5 py-3 font-bold">
                        <h3>About Me</h3>
                    </div>
                    <ul className='text-white text-center'>
                        <li className='mt-5'>
                            <label className='mb-2 text-xl font-semibold text-gray-950'>Name</label>
                            <p className='text-lg'>Muhammad Tayyab</p>
                        </li>
                        <li className='mt-5'>
                            <label className='mb-2 text-xl font-semibold text-gray-950'>Father Name</label>
                            <p className='text-lg'>Fayyaz Uddin</p>
                        </li>
                        <li className='mt-5'>
                            <label className='mb-2 text-xl font-semibold text-gray-950'>CNIC</label>
                            <p className='text-lg'>1234-21354814-9</p>
                        </li>
                        <li className='mt-5'>
                            <label className='mb-2 text-xl font-semibold text-gray-950'>Adress</label>
                            <p className='text-lg'>House No. 17, Sector 35/D</p>
                            <p>Korangi, Karachi</p>
                        </li>
                        <li className='mt-5'>
                            <label className='mb-2 text-xl font-semibold text-gray-950'>Date Of Birth</label>
                            <p className='text-lg'>16-Feb-2006</p>
                        </li>
                    </ul>

                    <div className="heading w-full bg-gray-700 text-white text-2xl text-center my-5 py-3 font-bold">
                        <h3 className='flex gap-1 mx-40 '>Skills <FaAngleDown className='mt-1 cursor-pointer hover:text-customBlue' /></h3>
                    </div>

                    <ul className='text-white text-xl list-disc ml-12 leading-10 my-10'>
                        <li className='list-disc'>Web Development</li>
                        <li>Graphic Designing</li>
                        <li>Data Analysis</li>
                        <li>Data Management</li>
                        <li>Mechine Learning basic</li>
                    </ul>

                    <div className="heading w-full bg-gray-700 text-white text-2xl text-center my-5 py-3 font-bold">
                        <h3>Contact Me</h3>
                    </div>

                    <ul className='text-white text-xl ml-12 leading-10 my-10'>
                        <li className='flex gap-2'><MdPhoneInTalk className='mt-2' /> +92 3182997727</li>
                        <li className='flex gap-2'><MdOutlineEmail className='mt-2' /> fayyaztayyab931@gmail.com</li>
                        <li className='flex gap-2'><TbWorldCode className='mt-2' /> tayyab-web.vercel.app</li>
                        <li className='flex gap-2'><MdLocationOn className='mt-2' /> Karachi, Pakistan</li>
                    </ul>

                </div>
                <div className="right_container w-2/3 h-fit">
                    <div className="name_heading pb-5 pt-16 text-center">
                        <h2 className='text-gray-900 text-5xl my-5 font-extrabold'>TAYYAB FAYYAZ</h2>
                        <h3 className='text-white text-xl mt-5 font-bold w-full py-2 bg-gray-700'>DEVELOPER</h3>
                    </div>

                    <div className="heading w-[500px] bg-gray-700 text-white text-start text-2xl font-bold mt-12 py-3 px-5 rounded-e-full shadow-md shadow-black">
                        <h3>Education</h3>
                    </div>

                    <ul className="leading-10 list-disc ml-10 my-10">
                        <li>
                            <h3 className='text-2xl font-bold mt-8'>Metric (Computer Science)</h3>
                            <p>From Govrn. School Korangi no. 4</p>
                        </li>
                        <li>
                            <h3 className='text-2xl font-bold mt-8'>Intermediate (Computer Science)</h3>
                            <p>From Govrn. College Landhi no. 6</p>
                        </li>
                        <li>
                            <h3 className='text-2xl font-bold mt-8'>Web Development (Course)</h3>
                            <p>From Aptech Branch Millinium</p>
                        </li>
                        <li>
                            <h3 className='text-2xl font-bold mt-8'>Generative AI  (Course continue..)</h3>
                            <p>From GIAIC by Sir Zia Khan</p>
                        </li>
                    </ul>

                    <div className="heading w-[500px] bg-gray-700 text-white text-start text-2xl font-bold mt-12 py-3 px-5 rounded-e-full shadow-md shadow-black">
                        <h3>Experience</h3>
                    </div>

                    <ul className="leading-10 list-disc ml-10 my-10">
                        <li>
                            <h3 className='text-2xl font-bold mt-8'>Fresh Student</h3>
                        </li>
                    </ul>

                    <div className="heading w-[500px] bg-gray-700 text-white text-start text-2xl font-bold mt-12 py-3 px-5 rounded-e-full shadow-md shadow-black">
                        <h3>Refrence</h3>
                    </div>

                    <ul className="leading-10 list-disc ml-10 my-10">
                        <li>
                            <h3 className='text-2xl font-bold mt-8'>Available</h3>
                        </li>
                    </ul>

                </div>
            </div>
        </main>
    );
};

export default ResumePage;