"use client";
import Nav from "@/common/header/Nav";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

const Header = () =>{
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });
        return () => window.removeEventListener('scroll', scrollYPos);
    });
    return(
        <header className={`header-top ${header ? "fixed" : ""} ${pathname !== '/' && 'bg-light'}`}>
            <div className="holder wrapper flex items-center justify-space">
                <div className="logo-holder">
                    <Link href="/"><h2>Bondi</h2></Link>
                </div>
                <Nav/>
            </div>
        </header>
    )
}
export default Header