import React from "react";

import shoppingIcon from "./assets/icons/shopping.png";
import landmarkIcon from "./assets/icons/landmark.png";
import natureIcon from "./assets/icons/nature.png";
import "./Mobile.scss";

const Mobile = () => (
  <div id="mobile">
    <header className="header">
      <div className="header-content p-2 d-flex flex-column justify-content-center align-items-center">
        <div>
          <i className="fas fa-star" style={{ color: "yellow" }} />
          <span>Elite Gold on Life PPS</span>
        </div>
        <p>Miguel Hernandez’s Itinerary</p>
        <div className="site h1 pl-2 my-1">BEIJING</div>
        <div className="date d-flex flex-column align-items-center">
          <div>10.3.2018(Wed)</div>
          <i className="fas fa-caret-down" style={{ color: "white" }} />
          <div>10.9.2018(Tue)</div>
        </div>
      </div>
    </header>

    <section className="od p-3 text-white container-fluid">
      <div className="row">
        <div className="col-3 offset-1 d-flex flex-column justify-content-center align-items-center">
          <p>Terminal 2</p>
          <h5 className="m-0">(PEK)</h5>
          <p>2:30 am</p>
        </div>
        <div className="fgraph col-4 p-0 d-flex align-items-center justify-content-between">
          <div className="circle bg-white rounded-circle" />
          <div className="flight-icon">
            <div className="hr" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 82 72"
              width="20"
              height="18"
            >
              <path
                d="M27.53,72H22.21a1.78,1.78,0,0,1-1.45-.71,1.35,1.35,0,0,1-.07-1.46L35.92,43.05,13,42,6.65,53.17a1.82,1.82,0,0,1-2.29.67L.94,52.34A1.46,1.46,0,0,1,0,50.71L3.38,36,0,21.29a1.46,1.46,0,0,1,.91-1.64l3.42-1.5a1.83,1.83,0,0,1,2.29.67L13,30l22.94-1L20.68,2.17A1.35,1.35,0,0,1,20.75.71,1.78,1.78,0,0,1,22.21,0h5.33a12.59,12.59,0,0,1,9.34,3.94l21.86,24,11.2-.58c5.81-.34,11,3.06,12,7.82a3.52,3.52,0,0,1,0,1.64c-1,4.76-6.24,8.14-12,7.82l-11.2-.58-21.86,24A12.59,12.59,0,0,1,27.53,72ZM25,69h2.56a9,9,0,0,0,6.67-2.81l22.42-24.6A1.83,1.83,0,0,1,58.05,41l12.08.63c4.13.19,7.71-2.1,8.41-5.38v-.53c-.7-3.28-4.2-5.6-8.41-5.38h0L58.05,31a1.87,1.87,0,0,1-1.43-.56L34.2,5.82A9,9,0,0,0,27.53,3H25L40.15,29.66a1.34,1.34,0,0,1-.05,1.43,1.76,1.76,0,0,1-1.39.74L12,33a1.66,1.66,0,0,1-1.61-.83L4.36,21.51l-.72.32L6.8,35.71a1.35,1.35,0,0,1,0,.59L3.64,50.17l.72.32,6.07-10.66A1.65,1.65,0,0,1,12,39l26.67,1.17a1.76,1.76,0,0,1,1.39.74,1.34,1.34,0,0,1,.05,1.43Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="circle bg-white rounded-circle" />
          <p className="flight-number">Airbus A350-900</p>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center align-items-center">
          <p>Terminal 1</p>
          <h5 className="m-0">(SIN)</h5>
          <p>7:40 am</p>
        </div>
      </div>
    </section>

    <section className="point p-3 container">
      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          <p>Shopping</p>
          <img src={shoppingIcon} alt="shopping" />
          <div className="stars">
            <span>
              <svg>
                <use href="#star-icon" x="0" y="0" width="24" height="24" />
              </svg>
            </span>
            <span>
              <svg>
                <use
                  href="#border-star-icon"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                />
              </svg>
            </span>
            <span>
              <svg>
                <use
                  href="#border-star-icon"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <p>Landmark</p>
          <img src={landmarkIcon} alt="landmark" />
          <div className="stars">
            <span>
              <svg>
                <use href="#star-icon" x="0" y="0" width="24" height="24" />
              </svg>
            </span>
            <span>
              <svg>
                <use href="#star-icon" x="0" y="0" width="24" height="24" />
              </svg>
            </span>
            <span>
              <svg>
                <use
                  href="#border-star-icon"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <p>Nature</p>
          <img src={natureIcon} alt="nature" />
          <div className="stars">
            <span>
              <svg>
                <use href="#star-icon" x="0" y="0" width="24" height="24" />
              </svg>
            </span>
            <span>
              <svg>
                <use
                  href="#border-star-icon"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                />
              </svg>
            </span>
            <span>
              <svg>
                <use
                  href="#border-star-icon"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="attractions container-fluid p-0">
      <div className="sperate d-flex flex-column align-items-center">
        <div className="hl" />
        <div className="vl" />
        <div className="title d-inline-block px-3">TOP 10 ATTRACTIONS</div>
      </div>

      <div className="d-flex my-3">
        <div className="place-container p-2 d-flex flex-column align-items-center">
          <img src={landmarkIcon} alt="landmark" />
          <h1 className="m-0">1</h1>
          <div className="place p-1 text-center">
            <p>天安門廣場</p>
            <p>Tiananmen Square</p>
          </div>
        </div>
        <div className="place-container p-2 d-flex flex-column align-items-center">
          <img src={landmarkIcon} alt="landmark" />
          <h1 className="m-0">2</h1>
          <div className="place p-1 text-center">
            <p>故宮</p>
            <p>Forbidden City</p>
          </div>
        </div>
        <div className="place-container p-2 d-flex flex-column align-items-center">
          <img src={shoppingIcon} alt="shopping" />
          <h1 className="m-0">3</h1>
          <div className="place p-1 text-center">
            <p>南鑼鼓巷</p>
            <p>Nanluogu Xiang</p>
          </div>
        </div>
      </div>

      <div className="my-3 d-flex justify-content-center">
        <div className="see-more d-inline-block px-2 mx-auto">see more</div>
      </div>
    </section>

    <section>
      <div className="sperate d-flex flex-column align-items-center">
        <div className="hl" />
        <div className="vl" />
        <div className="title d-inline-block px-3">YOUR 5 DAYS PACKAGE</div>
      </div>
      <div className="my-3 d-flex justify-content-center">
        <div className="see-more d-inline-block px-2 mx-auto">see more</div>
      </div>
    </section>

    <section>
      <div className="sperate d-flex flex-column align-items-center">
        <div className="hl" />
        <div className="vl" />
        <div className="title d-inline-block px-3">POPULAR HOTELS</div>
      </div>
      <div className="my-3 d-flex justify-content-center">
        <div className="see-more d-inline-block px-2 mx-auto">see more</div>
      </div>
    </section>
  </div>
);

export default Mobile;
