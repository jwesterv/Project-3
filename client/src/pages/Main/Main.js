import React from "react";

function Main() {
     return (
        //Background image "pending"
        <div className="view">
          {/*Container to hold and center logo and buttons in page*/}
          <div className="container-fluid">
          </div>
          <div className="container">
  
            {/*Logo made but needs to be made available in vector*/}
            <div className="row">
  
              <div className="col-sm"></div>
  
              <div className="col-sm">
                <div className="logo">
  
                  <h1 className="logo">FAM.ily</h1>
                </div>
              </div>
  
              <div className="col-sm"></div>
  
            </div>
  
            {/*Buttons to navigate to pages, no routes yet*/}
            <div className="row">
  
              <div className="col-sm"></div>
  
              <div className="col-sm">
  
                <button className="btn btn-rounded btn-outline-light btn-primary"> Create </button>
  
                <button className="btn btn-rounded btn-outline-light btn-primary"> Join </button>
  
              </div>
  
  
              <div className="col-sm"></div>
  
            </div>
            <div className="row">
  
              <div className="col-sm"></div>
  
              <div className="col-sm">
  
                <p className="about">About</p>
  
              </div>
  
              <div className="col-sm"></div>
  
            </div>
  
          </div >
  
        </div>
  
      );
}

export default Main;