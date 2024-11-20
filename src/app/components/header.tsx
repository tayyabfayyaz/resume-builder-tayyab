import Link from "next/link";
import Button from "./button";
import { MdMenu } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Header(){
    return(
        <>
        <header className="hidden md:hidden lg:flex lg:w-2/4 h-16 mx-auto px-5 bg-customTeal items-center my-5 rounded-3xl shadow-lg shadow-customBlue">

            <ul className="text-gray-700 font-bold flex gap-12 text-2xl ">
                <li><Link href='/' className="hover:underline-offset-1 hover:text-customBlue">Home</Link></li>
                <li><Link href='/resume' className="hover:underline-offset-1 hover:text-customBlue">Resume</Link></li>
                <li><Link href='/' className="hover:underline-offset-1 hover:text-customBlue">FAQ</Link></li>
                <li><Link href='/create-resume' className="hover:underline-offset-1 hover:text-customBlue">Create Resume</Link></li>
            </ul>

            {/* <Button 
                text="Create Resume" 
                className="py-2 px-5 bg-gray-700 text-teal-400 text-2xl font-bold rounded-2xl flex justify-end hover:shadow-md hover:shadow-customBlue"
            />     */}

        </header>
        
        <header className="flex justify-between items-center md:block lg:hidden xl:hidden bg-customTeal text-customBlue text-2xl py-2 px-4">
        <div className="logo text-xl shadow-md shadow-gray-500">
            <h1>RESUME BUILDER</h1>
        </div>
        <Sheet>
            <SheetTrigger> <MdMenu /> </SheetTrigger>
            <SheetContent className="text-xl bg-gray-500 ">
                <SheetHeader>
                <SheetTitle className="text-customBlue text-xl shadow-md shadow-customTeal my-5">RESUME BUILDER</SheetTitle>
                <SheetDescription className="text-xl text-white font-bold">
                    <ul className="space-y-5">
                        <li><Link href="/" >Home</Link></li>
                        <li><Link href='/resume' >Resume</Link></li>
                        <li><Link href="/" >FAQ</Link></li>
                        <li><Link href="/create-resume" >Create Resume</Link></li>
                    </ul>
                    {/* <Button
                        text="Create Resume"
                        className="my-10 bg-customTeal py-2 px-4 border-2 border-customBlue shadow-md shadow-customBlue"
                    /> */}
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

        </header>
        
        </>
    );
};

export default Header;