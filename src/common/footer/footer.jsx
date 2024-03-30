"use client";
import {FaBehance, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp} from "react-icons/fa";
import {usePathname} from "next/navigation";
import Link from "next/link";
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
function Footer(){
    const pathname = usePathname();
    const MapLinks = NavLinks.map((link, index)=> {
        const isActive = pathname.startsWith(link.path);
        return(
            <li key={index}>
                <Link href={link.path} className={`text-cap ${isActive ? "active-link" : ""}`}>{link.name}</Link>
            </li>
        )
    });
    return(
        <footer className="footer bg-primary text-light">
            <div className="wrapper p-t-4rem p-b-4rem">
                <div className="grid repeat-row-4">
                    <div className="footer-nav">
                        <h5>navigation</h5>
                        <ul className="m-t-1rem">
                            <>
                                {MapLinks}
                            </>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h5>follow us</h5>
                        <ul className="m-t-1rem">
                            <li><Link href="https://web.facebook.com/emitartscreatives" target="_blank"><FaFacebook/><span className="m-l-1rem">facebook</span></Link></li>
                            <li><Link href="https://instagram.com/emitproductionzm" target="_blank"><FaInstagram/><span className="m-l-1rem">instagram</span></Link></li>
                            <li><Link href="https://www.behance.net/EmitArtsCreatives" target="_blank"><FaBehance/><span className="m-l-1rem">behance</span></Link></li>
                            <li><Link href="https://www.linkedin.com/company/emitartscreatives" target="_blank"><FaLinkedin/><span className="m-l-1rem">linkedin</span></Link></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h5>contact</h5>
                        <ul className="m-t-1rem">
                            <li><FaPhone/><span className="m-l-1rem">+260 97 233 8115</span></li>
                            <li><FaWhatsapp/><span className="m-l-1rem">+260 96 843 505</span></li>
                            <li><FaEnvelope/><span className="m-l-1rem">emitartscreative@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h1 className="fs-3 opacity-low">Your companion in luxury apartments</h1>
                    </div>
                </div>
            </div>
            <div className="closing text-center p-t-1rem p-b-1rem">
                <small>&copy; 2024 | Emit arts & creatives</small>
            </div>
        </footer>
    )
}
export default Footer