import './Body.css';
import { FaImages } from "react-icons/fa";

function Body (){
    return(
        <div className='Body'>
            <nav className='body-Nav'>
                <button className='body-Nav-Btn'>
                    <FaImages className='boby-Nav-icon'/>
                    <p>Images</p>
                </button>
                
            </nav>
            <body className='body-Body'>
                bodyy
            </body>
        </div>
    )
};

export default Body;