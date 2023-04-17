import React , {useState} from 'react'
//17.28
const but = {
  
  borderStyle: "none" ,
  margin: 20,
  display: "flex" ,
  //justifyContent : "center" ,
  padding : 2 ,
  gap: 15 ,

}
/*const go = {
  

  backgroundColor: '#9370db	' ,
    border: "0 solid #E5E7EB",
    boxSizing: "border-box",
    color: "#000000" , 
  
  }*/


export default function Text(props) {
  



  const [text ,setText] = useState('Enter text here') ;
  const handleUpClick = ()=>{
    console.log("upper case was clicked");
    let newText = text.toUpperCase() ;
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("upper case was clicked");
    let newText = text.toLowerCase() ;
    setText(newText)
    
  }
  const handleCClick = ()=>{
    console.log("upper case was clicked");
    let newText = " " ;
    setText(newText)
  }

  const handleItClick = ()=>{
    console.log("upper case was clicked");
    let reverseText = text.split('').reverse().join('');
    setText(reverseText)
    }
    const handleBrClick = ()=>{
      console.log("upper case was clicked");
      let reverseText = text;
      reverseText = reverseText.split('').reverse().join('');
      setText(reverseText)
      }
  const handleOnChange = (event)=>{
    console.log("handled on chage");
    setText(event.target.value);
  }

  

  return (
    <>
    
    <div className="container" >
      <h1>Enter your text here </h1>
    
      <div className="mb-3">
      
  <textarea className="form-control" id="myBox" rows="15"  value={text} onChange={handleOnChange} style={props.myStyle}></textarea>
</div>
    <div className="btn" style={but}><button className="btno"  onClick={handleUpClick} style={props.myStyle}> Convert to Upper case</button>
    <button className="btno"  onClick={handleLoClick} style={props.myStyle} > Convert to Lower case</button>
    <button className="btno"  onClick={handleItClick} style={props.myStyle} > Convert to reverse</button>
    <button className="btno"  onClick={handleBrClick} style={props.myStyle} > Convert to back</button>
    <button className="btno"  onClick={handleCClick} style={props.myStyle} > Clear Text</button>
    

    </div>
    </div>

  <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>

  </div>
    </>
  )
}
