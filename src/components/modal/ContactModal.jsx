"use client";
import {FaEnvelope, FaKey, FaPhoneAlt, FaTimesCircle, FaUser, FaWindowClose} from "react-icons/fa";
import {useState} from "react";

function ContactModal(){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return(
        <>
            <button onClick={openModal} className="button contact-button">
                Contact us
            </button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-contact">
                        <div className="heading flex justify-space items-center">
                            <h3>Contact information</h3>
                            <button onClick={closeModal} className="icon-button">
                                <FaTimesCircle className="text-secondary" size={23}/>
                            </button>
                        </div>

                        <div className="text-content">
                            <ul>
                                <li><FaUser className="text-secondary"/><span className="m-l-1rem">Godfrey Kangwa</span></li>
                                <li><FaKey className="text-secondary"/><span className="m-l-1rem">C.e.o/director</span></li>
                                <li><FaPhoneAlt className="text-secondary"/><span className="m-l-1rem">+260 972 338 115</span></li>
                                <li><FaEnvelope className="text-secondary"/><span className="m-l-1rem">godfreykangwa97@gmail.com</span></li>
                            </ul>
                            <div className="closing text-center p-t-2rem p-b-2rem">
                                <h1 className="fs-4">Hire me</h1>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}
export default ContactModal