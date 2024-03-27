import {FaEnvelope, FaPhone, FaWhatsapp} from "react-icons/fa";

function Page(){
    return(
        <div className="about">
            <div className="wrapper text-center">
                <h1 className="fs-2 fl">This is a demo project</h1>
                <h1 className="fs-4 text-primary">made in react/nextjs</h1>
                <h4>contact us for your full site</h4>
                <ul className="m-t-1rem inline-flex gap-x-1 items-center m-t-1rem">
                    <li><FaPhone/><span className="m-l-1rem">+260 97 233 8115</span></li>
                    <li><FaWhatsapp/><span className="m-l-1rem">+260 96 843 505</span></li>
                    <li><FaEnvelope/><span className="m-l-1rem">emitartscreative@gmail.com</span></li>
                </ul>
            </div>
        </div>
    )
}
export default Page