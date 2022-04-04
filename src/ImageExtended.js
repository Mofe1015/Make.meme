import './Body.css';
import { GoSearch } from "react-icons/go";
import { MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";
import memesData from "./memesData.js"
import React from 'react';


function ImageEditNav(){
    return(
        <div>
            <div className='nav-Edit-header'>
                Image
            </div>
            <div className='nav-Edit-body'>
                {document.getElementById('imageid').value}
            </div>
        </div>
    )
};


 function ImageExtended (props){

    function imageOnCLick(evt){
        var imageid = evt.target.id
        var imageName = evt.target.value
        console.log(imageName)
        
        props.setEditType(()=>{
            return(
                <ImageEditNav
                    imgname =  {document.getElementById('imageid').value}
                />
            )
        })
    }
    function clearSearchField(){
        document.getElementById('searchimageinputid').value= null; 
    };
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        var memeimage = <img 
            id='imageid'
            onClick={imageOnCLick}
            src={ memesArray[randomNumber].url}
            className="meme-image"
            value={memesArray[randomNumber].name}
            />
        props.setMemeData(prevMemeData => {
            
            return {
                ...prevMemeData,
                memeImage:memeimage
            }
        })
    }
    
    return(
        <>
                <div className='nav-Extend-header'>
                    <div className='extendedNav-Text-Div' ><p>Images</p></div>
                    <button className='nav-Extend-backBtn' onClick={props.hideExtendNav}><MdClose className='nav-Extend-backIcon-x'/></button>
                    <button className='nav-Extend-backBtn' onClick={props.hideExtendNav}><MdOutlineArrowBackIosNew className='nav-Extend-backIcon'/></button>
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
export default ImageExtended;