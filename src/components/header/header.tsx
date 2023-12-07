import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiBellOn, CiUser, CiSearch } from "react-icons/ci";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }    
        window.addEventListener("scroll", handleScrolled);
        
        return () => window.removeEventListener("scroll", handleScrolled);
    })
  return (
    <header className={`${scrolled && 'bg-[#e10856]'} `}>
        <div className="flex item-center space-x-2 md:space-x-10">
            <Image src="/logo.svg" alt="logo" width={56} height={56} className="cursor-pointer object-contain"/>

        <ul className="space-x-4 items-center md:flex hidden">  
            <li className="navLink">Home</li>
            <li className="navLink">Movies</li>
            <li className="navLink">TV-show</li>
            <li className="navLink">New</li>
            <li className="navLink">Popular</li>
        </ul>
        </div>  
        <div className="flex items-center space-x-4 text-sm font-light">
            <CiSearch className="h-8 w-8 cursor-pointer" />
            <p className="hidden lg:inline">Kids</p>
            <CiBellOn className="h-8 w-8 cursor-pointer"/>
            <Link href={"/account"}>
                <CiUser className="h-8 w-8 cursor-pointer" />
            </Link>
        </div>
    </header>
    )
}

export default Header;