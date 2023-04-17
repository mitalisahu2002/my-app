import React from 'react'
// lecture 13 how to add alert 
export default function Alert(props) {
  return (
    
    
   props.alerttext &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>{props.alerttext.type}:</strong> {props.alerttext.msg} </div>
    
  )
}
