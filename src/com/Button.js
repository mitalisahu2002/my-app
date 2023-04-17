import React from 'react'

const ButtonStyle = {
    
    margin: 20,
    display: "flex" ,
    justifyContent : "center" ,
    padding : 3 ,
    gap: 15 ,
    
}

const but = {
    backgroundColor : "#00ced1	" ,

}


export default function Button() {
  return (
    <div style={ButtonStyle}>
      <button className="btn btn-primary" type="submit" style={but}>Convert to upper case</button>
      <button className="btn btn-primary" type="submit" style={but}>Button</button>
      <button className="btn btn-primary" type="submit" style={but}>Button</button>
      <button className="btn btn-primary" type="submit" style={but}>Button</button>
      <button className="btn btn-primary" type="submit" style={but}>Button</button>
    </div>
  )
}
