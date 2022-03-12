import './Body.css';
import { FaImages } from "react-icons/fa";
import { GoTextSize } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";


function showExtendNav(){   
    document.getElementById('navExtendiv').style.display = "flex" 
}

function hideExtendNav(){   
    document.getElementById('navExtendiv').style.display = "none" 
}

function NavExtend (){
    return(
        <div id='navExtendiv' className='nav-Extend'>
            <button onClick={hideExtendNav}>back</button>
        </div>
    )

};

function Nav(){
    return(
        <nav className='body-Nav'>
            <button className='body-Nav-Btn'>
                <FaImages className='boby-Nav-icon'/>
                <p>Images</p>
            </button>

            <button id='textBtn' className='body-Nav-Btn' onClick={showExtendNav}>
                <GoTextSize className='boby-Nav-icon'/>
                <p>Text</p>
            </button>

            <button className='body-Nav-Btn'>
                <BsThreeDots className='boby-Nav-icon'/>
                <p>More</p>
            </button>
        </nav>
    )
};



function Main(){
    return(
        <div className='body-Body'>
                <div className='edit-Box-Div'>
                    <div className='text-Div'>
                        <input className='text-Box'></input>
                    </div>
                    

                </div>               
            </div>
    )
};


function Body (){
    
    return(
        <div className='Body'>
           <Nav/>
           <NavExtend/>
           <Main/>
        </div>
    )
};

export default Body;