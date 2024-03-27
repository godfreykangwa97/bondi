import {FaDollarSign, FaKey} from "react-icons/fa";
import {FaClockRotateLeft} from "react-icons/fa6";

function Services(){
    return(
        <div className="services p-t-4rem p-b-4rem m-t-2rem">
            <div className="wrapper">
                <div className="services-grid grid repeat-row-3 gap-x-2">
                    <div className="services-card text-center">
                        <FaKey className="text-primary"/>
                        <h1>Rent</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis maxime molestiae nam nobis repudiandae!</p>
                    </div>
                    <div className="services-card text-center">
                        <FaDollarSign className="text-primary"/>
                        <h1>Buy</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis maxime molestiae nam nobis repudiandae!</p>
                    </div>
                    <div className="services-card text-center">
                        <FaClockRotateLeft className="text-primary"/>
                        <h1>Book</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis maxime molestiae nam nobis repudiandae!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services