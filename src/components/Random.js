import React from 'react';
import { useEffect,useState } from 'react';
import style from "./styles.css"



export default function Random() {
    
      
    const shades =[
    ["#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336"],  
    ["#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5"], 
    ["#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50"], 
    ["#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B"], 
    ["#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63"],  
    ["#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4"],  
    ["#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0"],  
    ["#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800"], 
]
 const shadesFunc = ()=> {
    const colorPicker1 = Math.floor(Math.random()*8) 
    const colorPicker2 = Math.floor(Math.random()*5) 
setBackgroundColor(shades[colorPicker1][colorPicker2])
}
const startShades = ()=> {
  const colorPicker1 = Math.floor(Math.random()*8) 
  const colorPicker2 = Math.floor(Math.random()*5) 
return shades[colorPicker1][colorPicker2]
}
   const randomColor = () => {
        const newColor = Math.floor(Math.random()*8);
        setColor(colors[newColor]);}
        const changeQuote = ()=> {
            setRandomNumber( Math.floor(Math.random()*1643  ))
           
         }
    
     const combineFunc = ()=> {
        randomColor();
        changeQuote();
        shadesFunc()
           
          }

     
  
   
     const colors = ["red","green", "blue", "indigo", "purple", "black", "white", "gray", "brown"]
          const [backgroundColor,setBackgroundColor] = useState(startShades)
    const [randomNumber,setRandomNumber] = useState(Math.floor(Math.random()*1643  ));
    const [color,setColor] = useState()
    const [data,setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            
            const response = await fetch(`https://type.fit/api/quotes`);
            const result = await response.json();
            setData(result)
         
        }
        fetchData()
    },[])

   
  return (
<div className='center'>
    <div className='mainDiv border-opacity-75' id="quote-box" style={{backgroundColor:backgroundColor,borderRadius:'25px',border:'2px solid {color}'}}   >

      <h1 id='text' className='text' style={{color:color,fontFamily:`'font-family: 'Rubik Iso', 'cursive'`}}><i className="bi bi-quote mb-5 text" ></i>{data.length > 0 ? <p>{data[randomNumber].text} <i className="bi bi-chat-right-quote-fill"></i></p>:<p>{'Not Possible'}</p>}</h1>
     <h2 id='author' className='floatRight mb-5 mt-5 author'  style={{color:color}}>{data.length > 0 ? <p>Author :{data[randomNumber].author}</p>:<p>{'Not Possible'}</p>}</h2>
      <div className='d-flex justify-content-between'>
     <button type="button" id='new-quote' className="btn btn-primary" onClick={combineFunc} style={color!=='white'?   {backgroundColor:color}:{backgroundColor:'black'}}>Change Quote</button>
<div className='SocialMedia container d-flex justify-content-end gap-3'>
<a href='https://twitter.com/xfitness_x' id='tweet-quote' target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
<a href="https://www.facebook.com/shoaibinvoker" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
</div>
</div>
</div>
    </div>
  
  )
}
