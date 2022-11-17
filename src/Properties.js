import React from "react";
import "./Properties.css";
import propcover from "./images/propcover.avif";
import bungal from "./images/bungal.jpg";
import apart from "./images/apart.avif";
import buysellprop from "./images/buysellprop.jpg";
import Services from "./Services";
import rent from "./images/rent.avif";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={propcover} alt="" />

        <h1 className="travel__cover">Click Picks Properties</h1>
        <div className="components">
          <div className="left__part">
            <div className="home__row">
              <Services
                id="12321341"
                title="Experience the Pleasure of Bungalows"
                image={bungal}
              />

              <Services
                id="49538094"
                title="Looking for Budget Properties"
                image={apart}
              />
            </div>

            <div className="home__row">
              <Services
                id="4903850"
                title="Buy or Sell your Properties"
                image={buysellprop}
              />

              <Services
                id="23445930"
                title="Rent your Assets on Click Picks"
                image={rent}
              />
            </div>
          </div>
          <div className="right__partprops" >
            <form >
              <div className="form-row">
                <div className="radio my-5" >
                  <input type="radio" name="choice" id="choice "checked="checked" /><span className="text"  > Round Trip</span>
                  <span className="mx-5">
                  <input type="radio" name="choice" id="choice" /><span className="text">One Way</span>
                  </span>
                  <span>
                  <input type="radio" name="choice" id="choice" /><span className="text" >Multi City</span>
                  <br/>
                  <br/>
                  </span>
                </div>
                <div className="dests1" >
                  
                  <span className="text mx-2 ms-5 my-3" >Flying From</span>
                    <label for="inputEmail4"></label>
                    <label for="inputPassword4"></label>
                    <input
                      type="text"
                      className="form-control px-3 my-3"
                      placeholder="City or Airport"
                      style={{width:"300px"}}
                    />  
                </div>
                <div className="dests1">
                  
                  <span className="text mx-4 ms-5 my-3" >Flying To</span>
                    
                    <input
                      type="text"
                      className="form-control px-3 my-3"
                      id="inputPassword4"
                      placeholder="City or Airport"
                      style={{width:"300px"}}
                    />  
                </div> 
                </div>


              <div className="dests mx-5">
                  <label className="text my-3"  for="departing" >Departing</label><input type="date" className="departing px-4" id="" placeholder="mm-dd-yy" style={{width:"300px", borderRadius:"8px",padding:"5px"}}/>
              </div>
              <div className="dests mx-5">
                  <label className="text my-3"  for="returning" >Returning</label><input type="date" className="returning px-4" id="" placeholder="mm-dd-yy" style={{width:"300px", borderRadius:"8px",padding:"5px"}}/>
              </div>
              
              <div className="form-row">
                <div className="dests">
                  <span className="text my-3 mx-1" style={{color:"white",position:"relative",top:"35px",right:"40px",opacity:"100%"}}> Adult </span>
                  <span className="text" style={{color:"white",position:"relative",top:"50px",left:"130px",opacity:"100%"}}>Children  </span>
                </div>
                <div className="dests">
                  <input type="number" name="" id="" className="px-3 mx-2" placeholder="Adults" style={{width:"200px", borderRadius:"8px",padding:"5px",position:"relative",right:"50px",opacity:"100%"}}/>
                  <input type="number" name="" id="" className="px-2 " placeholder="Children(5 yrs or belows)"style={{width:"200px", borderRadius:"8px",padding:"5px",position:"relative",right:"30px"}}/>
                 </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input mx-1"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label " for="gridCheck">
                  <span className="text"style={{color:"white"}} ><small>I agree to the <a href="#">Terms & Conditions</a> as per the guidelines issued by Click Picks</small>
                  </span>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary  text-center mx-3 me-3" style={{width:"480px"}}>
                Search Flight
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
