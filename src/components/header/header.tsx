import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { BiBellMinus } from 'react-icons/bi';
import { CiSearch, CiBellOn, CiUser } from'react-icons/ci';
import { AuthContext } from "../context/auth.context";

const Header = () => {  
    const [scrolled, setScrolled] = useState(false);
    const { logout } = useContext(AuthContext);
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
       
    }, []) 
   
  return (
    <header className={`${scrolled && 'bg-[#e10856]'} `}>
        <div className="flex item-center space-x-2 md:space-x-10">
            <Image src="/logo.svg" alt="logo" width={53} height={53} className="cursor-pointer object-contain"/>

        <ul className="space-x-4 items-center md:flex hidden">  
            <li className="navLink">Home</li>
            <li className="navLink">Movies</li>
            <li className="navLink">TV-show</li>
            <li className="navLink">New</li>
            <li className="navLink">Popular</li>
        </ul>
        </div>  
        <div className="flex items-center space-x-4 text-sm font-light">
            <CiSearch className="h-5 w-5 cursor-pointer md:h-8 md:w-8"/>
            <p className="hidden lg:inline">Kids</p>
            <CiBellOn className="h-5 w-5 cursor-pointer md:h-8 md:w-8"/>
            <Link href={"/account"}>
                <CiUser className="h-5 w-5 cursor-pointer md:h-8 md:w-8" />
            </Link>
            <AiOutlineLogout className='h-6 w-6 cursor-pointer' onClick={logout} />
        </div>
    </header>
    )
}

export default Header;