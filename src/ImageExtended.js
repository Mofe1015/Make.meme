import './Body.css';
import { GoSearch } from "react-icons/go";
import { MdOutlineArrowBackIosNew, MdClose, MdDelete } from "react-icons/md";
import React from 'react';


function ImageEditNav(props){
   

    function deleteImage(){
        document.getElementById('imageid').style.display = "none"
    }
    return(
        <div>
            <div className='nav-Edit-header'>
                Image
            </div>
            <div className='nav-Edit-body'> 
                <p className='nav-Edit-Img-p'>IMAGE-DETAILS</p> 
                <p>{props.imgname}</p>
                <p className='nav-Edit-Img-p'>LAYER</p> 
                <button className='nav-Edit-deleteBtn' onClick={deleteImage}><MdDelete style={{width:'25px', height:"25px"}}/>Delete</button>
            </div>
        </div>
    )
};


function ImageExtended (props){

    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function imageOnCLick(evt){
        var imageName = evt.target.alt
        props.setEditType(()=>{
            return(
                <ImageEditNav
                    imgname =  {imageName}
                />
            )
        })
    }
    function clearSearchField(){
        document.getElementById('searchimageinputid').value= null; 
    };
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        var memeimage = <img 
            id='imageid'
            onClick={imageOnCLick}
            src={ allMemes[randomNumber].url}
            className="meme-image"
            alt={allMemes[randomNumber].name}
            />
        props.setMemeData(prevMemeData => {
            
            return {
                ...prevMemeData,
                memeImage:memeimage
            }
        })
        props.setEditType(()=>{
            return(
                <ImageEditNav
                    imgname =  {allMemes[randomNumber].name}
                />
            )
        })
        document.getElementById('imageid').style.display = "flex"
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