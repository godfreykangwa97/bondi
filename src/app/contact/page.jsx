import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

function Page(){
    return(
        <div className="contact-page m-t-5rem p-t-4rem p-b-4rem">
            <div className="wrapper">
                <div className="heading text-center">
                    <h1>Contact</h1>
                </div>
                <div className="form-holder p-t-3rem p-b-3rem">
                    <form action="">
                        <div className="grid repeat-row-2 gap-x-1">
                            <div className="fill">
                                <div className="grid names repeat-row-2 gap-x-1">
                                    <div className="form-group">
                                        <input type="text" placeholder="First name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="email address"/>
                                </div>
                                <div className="form-group">
                                    <select name="" id="">
                                        <option value="">Subject</option>
                                    </select>
                                </div>
                            </div>
                            <div className="message">
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
                                </div>
                                <div className="form-group inline-flex items-center gap-x-1">
                                    <input type="checkbox"/>
                                    <span>also subscribe me to the mailing list</span>
                                </div>
                            </div>
                        </div>
                        <div className="action text-center m-t-1rem">
                            <button className="button send-button" type="submit">send</button>
                        </div>
                    </form>
                </div>
                <div className="map-holder">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15381.817343729164!2d28.2790415!3d-15.4599749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f352f010bac9%3A0xe820dec3737a1982!2sEmit%20arts%20%26%20creatives!5e0!3m2!1sen!2szm!4v1711530099621!5m2!1sen!2szm"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="closing text-center m-t-2rem">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, culpa dicta dolore ex exercitationem illum inventore ipsa molestiae nihil officia optio placeat, quibusdam quisquam reiciendis tempora tenetur voluptas.</p>
                </div>
                <div className="socials flex justify-center items-center text-center text-primary gap-x-1 p-t-4rem p-b-4rem">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
    )
}
export default Page