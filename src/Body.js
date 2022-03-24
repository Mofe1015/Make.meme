import './Body.css';
import { FaImages } from "react-icons/fa";
import { GoTextSize, GoSearch } from "react-icons/go";
import { BsThreeDots, BsArrowsMove } from "react-icons/bs";
import { MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";
import { IoIosResize } from "react-icons/io";
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



let inputTextData, setInputTextData, myid, myidhandler, myinputid, myresizerid;
var idnum = 0
function TextExtended(){
    [inputTextData, setInputTextData] = React.useState(
        {fontType: "", fontType: "", }
    );

   
    
    function addText(event){
         
        idnum = idnum + 1
        myidhandler ="handler"+ idnum
        myid = "myinputdivid" + myidhandler
        myinputid = "myinputid" + idnum
        myresizerid = "myresizerid" + idnum
        console.log(myid, myidhandler)

        function onFocus(evt){
            var clicked = evt.target;
            var clicknum = clicked.id[9]
            console.log(clicked.id[9])
            document.getElementById('myinputid'+clicknum).style.border = 'block'
            document.getElementById('handler'+clicknum).style.display = 'flex'
            
        };
        function onBlur(evt){
            var clicked = evt.target;
            var clicknum = clicked.id[9]
            document.getElementById('handler'+clicknum).style.display = 'none'
            document.getElementById('myinputid'+clicknum).style.border = 'none'
           
        };
        function onExpand(evt){
            var hover = evt.target;
            var id = hover.id
            var width = document.getElementById('myinputid'+id).clientWidth;
            var height = document.getElementById('myinputid'+id).clientHeight;
            console.log(width, height)
            
        }
        function onInput(evt){
            var input = evt.target;
            var inputid = input.id
            console.log(inputid)
            var element = document.getElementById(inputid)
            element.style.maxWidth = '600px'
            element.style.height = "";
            element.style.width = "";
            element.style.width = element.clientWidth+element.scrollHeight + "px"
            element.style.height = element.scrollHeight + "px"
            
        }


           
        var textField = (
            <div className='myinputdivid' id={myid}>
                <textarea name="text" onInput={onInput} className='add-Text-input' placeholder='Sample Text' id={myinputid} onFocus={onFocus} onBlur={onBlur} ></textarea>
                <div className='myinputdividhandler1'></div>
                <div className='myinputdividhandler' onMouseEnter={moveinpudiv} id={myidhandler} ><BsArrowsMove/></div>
            </div>
        )
        setMemeData(prevMemeData => {
            return {
                ...prevMemeData,
                memeText: [textField, prevMemeData.memeText]
            }   
        });
       
        return(myid, myidhandler, myinputid, myresizerid)   
    }
    
   
    function moveinpudiv(evt){
        var clicked = evt.target;
        var myid1 = "myinputdivid"+clicked.id
       

        console.log(clicked.id)
        dragElement(document.getElementById(myid1));
        function dragElement(elmnt) {
            
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            document.getElementById(clicked.id).onmousedown  = dragMouseDown;
        
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
            document.onpointerup = null;
            document.onpointermove = null
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