import './Body.css';
import { FaImages } from "react-icons/fa";
import { GoTextSize } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";
import React from 'react';


function showExtendNav(){   
    document.getElementById('navExtendiv').style.display = "flex" 
    document.getElementById("editBoxid").classList.replace('edit-Box-Div', 'edit-Box-Div-small');
}

function hideExtendNav(){   
    document.getElementById('navExtendiv').style.display = "none" 
    document.getElementById("editBoxid").classList.replace( 'edit-Box-Div-small','edit-Box-Div');
    
}






function NavExtendImg(){
    return(
        <div id='navExtendiv' className='nav-Extend'>
            <div className='nav-Extend-header'>
                <p>Images</p>
                <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdClose className='nav-Extend-backIcon-x'/></button>
                <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdOutlineArrowBackIosNew className='nav-Extend-backIcon'/></button>

            </div>
        </div>
    )
};

const TextExtended = (
    <>
        <div className='nav-Extend-header'>
            <p>Text</p>
            <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdClose className='nav-Extend-backIcon-x'/></button>
            <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdOutlineArrowBackIosNew className='nav-Extend-backIcon'/></button>
        </div>
        <div className='nav-Extend-Body'>
                        
            <input className='text-Box' placeholder='Top Text'></input>
            <input className='text-Box' placeholder='Bottom Text'></input>
            <button className='add-Text-Btn'>Add Text</button>
                    
        </div>
    </> 
)



function Nav(){
    const [extendedNav, setExtendedNav] = React.useState(<></>)
    
        
    function addText(){
        setExtendedNav(TextExtended)
        showExtendNav()
    }
    return(
        <>
            <nav className='body-Nav'>
                <button className='body-Nav-Btn'>
                    <FaImages className='boby-Nav-icon'/>
                    <p>Images</p>
                </button>

                <button id='textBtn' className='body-Nav-Btn' onClick={addText}>
                    <GoTextSize className='boby-Nav-icon'/>
                    <p>Text</p>
                </button>

                <button className='body-Nav-Btn'>
                    <BsThreeDots className='boby-Nav-icon'/>
                    <p>More</p>
                </button>
            </nav>

            <div id='navExtendiv' className='nav-Extend'>
                {extendedNav}
            </div>
        </>
        
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
           <Main/>
        </div>
    )
};

export default Body;