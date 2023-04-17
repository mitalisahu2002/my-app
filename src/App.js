//import logo from './logo.svg';
import { useState } from 'react';
import './App.css'; 
//leccture 10 4.05
import Navbar from './com/Navbar';
import Text from './com/Text';
//import  A from './com/A' ;
//import Button from './com/Button' ;
import Alert from './com/Alert';


function App() {
  const [myStyle, setMyStyle] = useState({
 
    //color: 'paleturquoise' ,
    backgroundColor: '#e3e3e3' ,
    
  
  })


  const [color, setcolor] = useState({
 
    color: 'white' ,
    
    
  
  })
  const [text , settext] = useState("enable dark mode") ;
  const [alert , setalert] = useState(null) ;
  const showalert = (message, type)=>{
    setalert({
      msg: message ,
      type: type ,
    })
     
    setTimeout(()=>{
        setalert(null) ;
    }, 1000)



  }
  const changeGreen = ()=>{
   // setMyStyle('green')
   setMyStyle({
    backgroundColor: '#cbf078' ,
   })
    document.body.style.backgroundColor = '#90ee90	' ;


  }
  const changeRed = ()=>{
   // setMyStyle('red')
   setMyStyle({
    backgroundColor: ' #ff8585' ,
   })
    document.body.style.backgroundColor = '#ff8264	' ;

  }
  const changeYellow = ()=>{
    //setMyStyle('yellow')
    setMyStyle({
      backgroundColor: '#f8f398' ,
     })
    document.body.style.backgroundColor = '#f7ec77	' ;

  }
  const changeBlue = ()=>{
    setMyStyle({
      backgroundColor: '#d5def5' ,
     })
    document.body.style.backgroundColor = '#87cefa	' ;
    

  }
 
  const [Mode , setMode] = useState('dark') ;
  const togglemode = ()=>{
    if(Mode === 'light'){
      setMyStyle({
        backgroundColor: ' #e3e3e3' ,
       })
      setMode('dark') ;
      document.title = 'textutils - dark mode' ;
      showalert("dark mode has been enabled" , "sucess");
      document.body.style.backgroundColor = 'grey' ;
      setcolor({
        color: 'white' ,
    })
      settext("enable light mode")
      
    }
    else{
      setMyStyle({
        backgroundColor: ' #e3e3e3' ,
       })
      setMode('light') 
      showalert("light mode has been enabled" , "sucess");
      document.title = 'textutils - light mode' ;

    document.body.style.backgroundColor = 'paleturquoise' ;

      setcolor({
          color: 'black' ,
      })
      settext("enable dark mode")
    }
  }

  


  return (
    <>
<Navbar 
title="Textutils" about="About" Mode={Mode} togglemode={togglemode} color={color} text={text} changeGreen={changeGreen}
changeRed={changeRed}
changeYellow={changeYellow}
changeBlue={changeBlue}

/>
<Alert alerttext={alert}/>

<div className="container"></div>
<Text myStyle={myStyle} /> 

{//<div className="c2"><A/></div>
}


    </>
  );
}

export default App;
