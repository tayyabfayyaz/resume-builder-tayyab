import Button from "./button";
import Image from "next/image";

function HeroSection(){
    return(
        <>
        <div className="left-container w-3/5 h-screen float-start flex flex-col justify-center items-center px-10">
            <h2 className="text-gray-900 text-3xl my-5 font-bold shadow-sm shadow-customBlue">WELLCOME TO OUR </h2>
            <h2 className="text-2xl mb-5 font-bold shadow-sm shadow-customBlue">RESUME BUILDER</h2>
            <h2 className="text-gray-900 text-xl mb-5 font-bold shadow-sm shadow-customBlue">WEBSITE</h2>
            <p className="text-black text-lg my-5"> 
                where crafting your dream career starts with a professional CV—at no cost to you!
                Our mission is to make job applications simpler and more effective with expertly designed CVs and resumes
                tailored to showcase your skills, experience, and unique qualities.
                We offer a variety of stylish templates and customization options,
                ensuring your resume stands out from the crowd. Whether you are a fresh graduate or an experienced professional,
                our completely free service is here to help you create a powerful first impression.
                Let us help you open doors to new opportunities!
            </p>

            <Button text="NOW CREATE" className="text-2xl py-2 px-5 bg-customTeal text-white font-bold rounded-2xl mt-10 hover:shadow-lg hover:shadow-customBlue" />

        </div>
        <div className="right-container w-2/5 h-screen float-end flex justify-center items-center">
            <div className="image_conatiner">
                <Image 
                    src='/resume-img.png'
                    alt="image"
                    width={400}
                    height={400}
                    className="w-[400px] border-4 border-customTeal shadow-md shadow-customTeal"
                />
            </div>
        </div>
        </>
    );
};

export default HeroSection