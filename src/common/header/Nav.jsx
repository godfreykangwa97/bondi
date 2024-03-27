"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLinks = [
    {
        id:0,
        name: "home",
        path: "/"
    },
    {
        id:1,
        name: "contact",
        path: "/contact"
    },
    {
        id:2,
        name: "about",
        path: "/about"
    }
]
function Nav(){
    const pathname = usePathname();
    const MapLinks = NavLinks.map((link, index)=> {
        const isActive = pathname.startsWith(link.path);
       return(
           <Link href={link.path} key={index} className={`text-cap ${isActive ? "active-link" : ""}`}>{link.name}</Link>
       )
    });


    return(
        <nav className="header-navigation inline-flex gap-x-1">
            <>
                {MapLinks}
            </>
        </nav>
    )
}
export default Nav