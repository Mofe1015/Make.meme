import './Body.css';
import { FaImages } from "react-icons/fa";
import { GoTextSize, GoSearch } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";
import memesData from "./memesData.js"
import React from 'react';


function showExtendNav(){   
    document.getElementById('navExtendiv').style.display = "flex" 
    document.getElementById("editBoxid").classList.replace('edit-Box-Div', 'edit-Box-Div-small');
};

function hideExtendNav(){   
    document.getElementById('navExtendiv').style.display = "none" 
    document.getElementById("editBoxid").classList.replace( 'edit-Box-Div-small','edit-Box-Div');
    
};


let memeData, setMemeData;
function Main(){
    [memeData, setMemeData] = React.useState({memeImage: "", memeText: []})
    return(
        <div className='body-Body'>
                <div id='editBoxid' className='edit-Box-Div' >
                    <div className='add-Text-inputDiv' >{memeData.memeText}</div>
                    <img src={memeData.memeImage} className="meme-image" />
                </div>               
        </div>
        
    )
};



function ImageExtended (){
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        setMemeData(prevMemeData => {
            return {
                ...prevMemeData,
                memeImage: memesArray[randomNumber].url
            }
        })
    }
    function clearSearchField(){
        document.getElementById('searchimageinputid').value= null; 
    };
    return(
        <>
                <div className='nav-Extend-header'>
                    <div className='extendedNav-Text-Div' ><p>Images</p></div>
                    <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdClose className='nav-Extend-backIcon-x'/></button>
                    <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdOutlineArrowBackIosNew className='nav-Extend-backIcon'/></button>
                </div>
                <div className='nav-Extend-Body'>
                    <div className='search-Img-Div'>
                        <div className='searchbar-div'>
                            <GoSearch className='search-Img-icon'/>
                            <input id='searchimageinputid' className='search-Img-Input' placeholder='search'></input>
                             <button className='clear-SearchField'  onClick={clearSearchField}><MdClose/></button>
                        </div>
                        <button className='go-Btn'>
                            <p>Go</p>
                        </button>
                        
                    </div>
                    <button className='add-RndmImg-Btn' onClick={getMemeImage}>Add random Image</button>
                </div>
        </>
    )   

}

let inputTextData, setInputTextData;

function TextExtended(){
    [inputTextData, setInputTextData] = React.useState(
        {firstText: "", secondText: ""}
    );

    function textInputChange(event) {
        setInputTextData(prevInputTextData => {
            return {
                ...prevInputTextData,
                [event.target.name]: event.target.value
            }
        })
    };
    function addText(event){
       
        
        setMemeData(prevMemeData => {
            var textField = (
                <div id="myinputdivid">
                    <div id='myinputdividhandler'></div>
                    <textarea className='add-Text-input'></textarea>
                </div>
            )
          
            return {
                ...prevMemeData,
                memeText: [textField, prevMemeData.memeText]
            }
            
        })
       
        
    }
    
    setTimeout(moveinpudiv(), 10000)
    function moveinpudiv(){
        
        dragElement(document.getElementById("myinputdivid"));
        function dragElement(elmnt) {
            document.getElementById('myinputdivid').style.backgroundColor = "red"
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "handler")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "handler").onmousedown = dragMouseDown;
            } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
            }
        
            function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
            }
        
            function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
        
            function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
            }
        }
    }
    return(
        <>
            <div className='nav-Extend-header'>
                <div className='extendedNav-Text-Div' ><p>Text</p></div>
                <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdClose className='nav-Extend-backIcon-x'/></button>
                <button className='nav-Extend-backBtn' onClick={hideExtendNav}><MdOutlineArrowBackIosNew className='nav-Extend-backIcon'/></button>
            </div>
            <div className='nav-Extend-Body'>
                <form className='nav-Extend-Body'>
                    <input
                        className='text-Box'
                        placeholder='Top Text'
                        onChange={textInputChange}
                        name='firstText'
                        value={inputTextData.firstText}
                    />
                    <input
                        className='text-Box'
                        placeholder='Bottom Text'
                        onChange={textInputChange}
                        name='secondText'
                        value={inputTextData.secondText }
                    />
                    <button className='add-Text-Btn' type='button' onClick={addText}>Add Text</button>    
                </form>
                
            </div>
        </>    
    )};



function Nav(){
    const [extendedNav, setExtendedNav] = React.useState(<></>)
    function addText(){
        setExtendedNav(<TextExtended/>)
        showExtendNav()
    };
    function addImage(){
        setExtendedNav(<ImageExtended/>)
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