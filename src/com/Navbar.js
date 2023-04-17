import React from 'react'
import PropTypes from 'prop-types'
//8.37
const ho={
  borderRadius: 100,
  }
const ji={
  display: "flex", 
  gap: 20 ,

}
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
        
      </ul>
      <div className="box" style={ji}>
      <button type="button" class="btn btn-success" style={ho} onClick={props.changeGreen}></button>
<button type="button" class="btn btn-danger" style={ho} onClick={props.changeRed}></button>
<button type="button" class="btn btn-warning" style={ho} onClick={props.changeYellow}></button>
<button type="button" class="btn btn-info" style={ho} onClick={props.changeBlue}></button>
<div className="form-check form-switch ">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.togglemode} checked/>
  <label className="form-check-label" htmlfor="flexSwitchCheckChecked" style={props.color}>{props.text}</label>
</div>
      </div>
     

     

       </div>
  </div>
</nav>

    </div>
  )
}
Navbar.propTypes = {title: PropTypes.string , about: PropTypes.string } 
Navbar.defaultProps = {
  title: 'set title here' ,
  about: ' set about here'
}
