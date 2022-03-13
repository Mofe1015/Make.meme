import './Body.css';
import { FaImages } from "react-icons/fa";
import { GoTextSize } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";


function showExtendNav(){   
    document.getElementById('navExtendiv').style.display = "flex" 
    if (document.documentElement.clientWidth <= 700) {

        document.getElementById("editBoxid").style.cssText = `
            width: 60vw;
            height: 60vw;
            margin: 0px;
            margin-top: 50vh; 
        `;
    }
    
}

function hideExtendNav(){   
    document.getElementById('navExtendiv').style.display = "none" 
    document.getElementById("editBoxid").classList.add("edit-Box-Div");
    

}

function NavExtend (){
    return(
        <div id='navExtendiv' className='nav-Extend'>
            <div className='nav-Extend-header'>
                <p>Text</p>
                <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdOutlineArrowBackIosNew className='nav-Extend-backIcon'/></button>
            </div>
            <div className='nav-Extend-Body'>
                    
                <input className='text-Box' placeholder='Top Text'></input>
                   
            </div>

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
                <div id='editBoxid' className='edit-Box-Div'>
                    
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