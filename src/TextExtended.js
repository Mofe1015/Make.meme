import './App.css';
import {  BsArrowsMove } from "react-icons/bs";
import { MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";
import React from 'react';

let changeColor
function TextEditNav(props){
    
    function changeColor(evt){
        props.textinput.focus()
        var textColor = evt.target.style.backgroundColor
        props.textinput.style.color = textColor
       
        

    }
    return(
        <div>
            <div className='nav-Edit-header'>
                Text
            </div>
            <div className='nav-Edit-body'>
                <div className='nav-Edit-text'>
                    <p>FONT</p>
                </div>
                <div className='nav-Edit-text'>
                    <p>TEXT-COLOR</p>
                    <div className='current-Text-Color'>
                        <div className='edit-Text-color' style={{backgroundColor: props.currentColorset}} ></div>
                        <p>{props.currentColorset}</p>
                    </div>
                        <div className='edit-Text-color-Div'>
                            <div onClick={changeColor}  className='edit-Text-color' style={{backgroundColor: "white"}} ></div>
                            <div onClick={changeColor} className='edit-Text-color' style={{backgroundColor: "red"}} ></div>
                            <div onClick={changeColor} className='edit-Text-color' style={{backgroundColor: "yellow"}} ></div>
                            <div onClick={changeColor} className='edit-Text-color' style={{backgroundColor: "green"}} ></div>
                            <div onClick={changeColor} className='edit-Text-color' style={{backgroundColor: "blue"}} ></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

let inputTextData, setInputTextData, myid, myidhandler,myidhandler1, myinputid, myresizerid ;
var idnum = 0
function TextExtended(props){
    [inputTextData, setInputTextData] = React.useState(
        {fontType: "", fontSize: "", fontColor: "black" }
    );
    
    function addText(event){
        
        idnum = idnum + 1
        myidhandler ="handler"+ idnum
        myidhandler1 ="handler1"+ idnum
        myid = "myinputdivid" + myidhandler
        myinputid = "myinputid" + idnum
        myresizerid = "myresizerid" + idnum

        setInputTextData(prevMemeData => {
            return {
                ...prevMemeData,
                fontColor: 'black'
            }   
        });
        
        function onFocus(evt){
            var clicked = evt.target;
            var clicknum = clicked.id[9]
            
            var textinput = document.getElementById('myinputid'+clicknum)
            textinput.style.border = 'block'
            document.getElementById('handler1'+clicknum).style.display = 'flex'
            document.getElementById('handler'+clicknum).style.display = 'flex'
            function deleteinput(e){
               if (e.keyCode === 46) {textinput.remove()}
            }
            textinput.addEventListener('keyup', deleteinput)
            
            function setColor(){ 
                if (textinput.style.color === '') {textinput.style.color='black'}
            }
            setColor()


            props.setEditType(()=>{
                var currentColor =  textinput.style.color
                console.log(currentColor)
                return(
                    <TextEditNav
                        textinput= {textinput}
                        currentColorset = {currentColor}
                        setColor = {setColor}
                    />
                )
            })
            
            
           
            
        };
        function onBlur(evt){
            var clicked = evt.target;
            var clicknum = clicked.id[9]
            document.getElementById('handler'+clicknum).style.display = 'none'
            document.getElementById('handler1'+clicknum).style.display = 'none'
            document.getElementById('myinputid'+clicknum).style.border = 'none'
            
           
        };
        
        function onInput(evt){
            var input = evt.target;
            var inputid = input.id
            var element = document.getElementById(inputid)
            element.style.maxWidth = '600px'
            element.style.width=""
            element.style.height=""
            element.style.width = element.clientWidth+element.scrollHeight + "px"
            element.style.height = element.scrollHeight + "px"
            
        }   
        
      
    
         const textField = (
            <div className='myinputdivid' id={myid}>
                <textarea name="text"
                    style={{fontFamily:inputTextData.fontType}}
                    onInput={onInput}
                    className='add-Text-input'
                    id={myinputid}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >Sample Text</textarea>
                <div className='myinputdividhandler1' id={myidhandler1}><BsArrowsMove/></div>
                <div className='myinputdividhandler' onMouseEnter={moveinpudiv} id={myidhandler} ></div>
            </div>
        )

        props.setMemeData(prevMemeData => {
            return {
                ...prevMemeData,
                memeText: [...prevMemeData.memeText, textField]
            }   
        });

        document.getElementById('myinputid'+idnum).focus()
    }
    
    function moveinpudiv(evt){

        var clicked = evt.target;
        var myid1 = "myinputdivid"+clicked.id
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

    function setFontType(evt){
        var clicked = evt.target;
        var font = clicked.style.fontFamily
        setInputTextData(prevMemeData => {
            return {
                ...prevMemeData,
                fontType: font
            }   
        });
        setTimeout(addText, 1);
        
    }

    
    return(
        <>
            <div className='nav-Extend-header'>
                <div className='extendedNav-Text-Div' ><p>Text</p></div>
                <button className='nav-Extend-backBtn' onClick={props.hideExtendNav}><MdClose className='nav-Extend-backIcon-x'/></button>
                <button className='nav-Extend-backBtn' onClick={props.hideExtendNav}><MdOutlineArrowBackIosNew className='nav-Extend-backIcon'/></button>
            </div>
            <div className='nav-Extend-Body'>
                <form className='nav-Extend-Body'>
                    <div className='font-type' onClick={setFontType} >Add Header Text</div>
                    <div className='font-type'onClick={setFontType} style={{fontFamily:'Impact, fantasy'}}>Add fantasy Text</div>
                    <div className='font-type'onClick={setFontType} style={{fontFamily:'Courier, monospace'}}>Add monospace Text</div>
                   
                    <button className='add-Text-Btn' type='button' onClick={addText}>Add Text</button>    
                </form>
                
            </div>
        </>    
    )};

export default TextExtended;