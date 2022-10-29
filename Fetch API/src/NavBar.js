import React from "react";

class Navbar extends React.Component{
    render(){
        return(
         <>
          <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Brand XYZ</a>
              </div>
              <button type="button" className="btn btn-outline-primary" onClick={this.props.handleClick}>Primary</button>

            </nav>
        </>
        );
        
    }
}

export default Navbar;