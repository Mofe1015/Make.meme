import './Body.css';
import { FaImages } from "react-icons/fa";
import { GoTextSize } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

function Body (){
    
    return(
        <div className='Body'>
            <nav className='body-Nav'>
                <button className='body-Nav-Btn'>
                    <FaImages className='boby-Nav-icon'/>
                    <p>Images</p>
                </button>

                <button className='body-Nav-Btn'>
                    <GoTextSize className='boby-Nav-icon'/>
                    <p>Text</p>
                </button>

                <button className='body-Nav-Btn'>
                    <BsThreeDots className='boby-Nav-icon'/>
                    <p>More</p>
                </button>
                
            </nav>
            <div className='body-Body'>
                bodyy
            </div>
        </div>
    )
};

export default Body;