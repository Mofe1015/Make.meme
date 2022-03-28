import './Body.css';
import { FaImages } from "react-icons/fa";
import { GoTextSize } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import TextExtended from "./TextExtended.js"
import ImageExtended from './ImageExtended';
import React from 'react';
function imageOnCLick(){
    console.log("image cluicked")
}
let memeData, setMemeData;
function Main(){
    [memeData, setMemeData] = React.useState({memeImage: "", memeText: []})
    return(
        <div className='body-Body'>
                <div id='editBoxid' className='edit-Box-Div' >
                    {memeData.memeText}
                    <img onClick={imageOnCLick} src={memeData.memeImage} className="meme-image" />
                    
                </div>               
        </div>
        
    )
};


function Nav(){
    const [extendedNav, setExtendedNav] = React.useState(<></>)

    function showExtendNav(){   
        document.getElementById('navExtendiv').style.display = "flex" 
        document.getElementById("editBoxid").classList.replace('edit-Box-Div', 'edit-Box-Div-small');
    };
    
    function hideExtendNav(){   
        document.getElementById('navExtendiv').style.display = "none" 
        document.getElementById("editBoxid").classList.replace( 'edit-Box-Div-small','edit-Box-Div');
        
    };
    function addText(){
        setExtendedNav(
        <TextExtended
            setMemeData = {setMemeData}
            hideExtendNav = {hideExtendNav}
        />)
        showExtendNav()
    };
    function addImage(){
        setExtendedNav(
        <ImageExtended
            setMemeData = {setMemeData}
            hideExtendNav = {hideExtendNav}
        />)
        showExtendNav()
    };
    return(
        <>
            <nav className='body-Nav'>
                <button className='body-Nav-Btn'  onClick={addImage}>
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

function Body (){   
    return(
        <div className='Body'>
           <Nav/>
           <Main/>
        </div>
    )
};

export default Body;