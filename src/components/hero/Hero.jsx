import Link from "next/link";
import {FaAngleDown} from "react-icons/fa";

function Hero(){
    return(
        <div className="hero">
            <div className="wrapper">
                <div className="text-content">
                    <h1 className="fs-4 fl">Peza Bondi</h1>
                    <h3 className="fs-4 fb-r">Fast fast</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi dolorum, expedita facere fugit hic inventore maxime optio pariatur, quisquam quo soluta unde.</p>
                </div>
                <div className="action inline-flex items-center gap-x-1 m-t-1rem">
                    <Link href="/property/id" className="button rent-button">Rent</Link>
                    <Link href="/contact" className="button contact-button">Contact us</Link>
                </div>
            </div>
            <div className="background"></div>
            <div className="hero-footer">
                <FaAngleDown size="24" className="text-primary"/>
            </div>
        </div>
    )
}
export default Hero