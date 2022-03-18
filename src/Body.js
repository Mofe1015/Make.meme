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

let memeData
let setMemeData

function Main(){
    [memeData, setMemeData] = React.useState({memeImage: "", memeText: []})
    

    return(
        <div className='body-Body'>
                <div id='editBoxid' className='edit-Box-Div' onClick={hideExtendNav}>
                    <div  className='appendText' >{memeData.memeText}</div>
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

let inputTextData
let setInputTextData
function TextExtended(){
    [inputTextData, setInputTextData] = React.useState(
        {firstText: "", secondText: ""}
    )
    function textInputChange(event) {
        setInputTextData(prevInputTextData => {
            return {
                ...prevInputTextData,
                [event.target.name]: event.target.value
            }
        })
        console.log(inputTextData)
    };
    var textField = {text:<input/>, id:1}
    function addText(){
       
        setMemeData(prevMemeData => {
            return {
                ...prevMemeData,
                memeText: [textField.text, prevMemeData.memeText]
            }
        })
        

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