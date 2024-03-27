import Link from "next/link";

function Contact(){
    return(
        <div className="contact-quick p-t-5rem p-b-5rem">
            <div className="wrapper text-center">
                <div className="heading">
                    <h1 className="fs-4 fl">Have any questions?</h1>
                    <h3 className="fs-4 fb-r text-secondary">Contact us</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum soluta vel voluptates? Corporis cupiditate ipsam, maxime nam nobis repudiandae saepe sapiente temporibus unde.</p>
                <div className="action m-t-1rem">
                    <Link href="/contact" className="button contact-button">Contact us</Link>
                </div>
            </div>
        </div>
    )
}
export default Contact
