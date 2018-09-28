import React from "react";

const Desktop = () => (
  <>
    <header className="header">
      <div className="overlay">
        <div className="header-container">
          <h1 className="destination">Beijing</h1>
          <p className="username">Miguel Hernandez’s Itinerary</p>
          <div className="account-level">
            <svg className="account-level__star-icon">
              <use href="#star-icon" x="0" y="0" width="24" height="24" />
            </svg>
            <span>Elite Gold on Life PPS</span>
          </div>
        </div>
      </div>
    </header>
    <main className="main">
      <section className="ticket-info">
        <div className="flight-info">
          <p className="date">
            <span>10.3.2018</span>
            <span className="brackets">Wed</span>
          </p>
          <div className="dest start">
            <p className="terminal">Terminal 2</p>
            <p className="code brackets">PEK</p>
            <p className="time">2:30 am</p>
          </div>
          <div className="flight-number">
            <img src="./assets/icons/airplan.svg" alt="flight" />
            <p>Airbus A350-900</p>
          </div>
          <div className="dest end">
            <p className="terminal">Terminal 1</p>
            <p className="code brackets">SIN</p>
            <p className="time">7:40 am</p>
          </div>
          <p className="date">
            <span>10.9.2018</span>
            <span className="brackets">Tue</span>
          </p>
        </div>
      </section>
      <section className="ratings">
        <ul>
          <li className="ratings__rate-item">
            <p>Shopping</p>
            <div className="ratings__rating">
              <img src="./assets/icons/shopping.png" alt="shopping" />
              <div className="stars">
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
          </li>
          <li className="ratings__rate-item">
            <p>Landmark</p>
            <div className="ratings__rating">
              <img src="./assets/icons/landmark.png" alt="landmark" />
              <div className="stars">
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
          </li>
          <li className="ratings__rate-item">
            <p>Nature</p>
            <div className="ratings__rating">
              <img src="./assets/icons/nature.png" alt="nature" />
              <div className="stars">
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
          </li>
        </ul>
      </section>
    </main>
    <footer className="footer">
      <ul>
        <li id="top-10-attractions">
          <img
            src="./assets/images/top-10-attractions.jpg"
            alt="top attractions"
          />
          <p>TOP 10 ATTRACTIONS</p>
        </li>
        <li>
          <img
            src="./assets/images/5-days-tour-package.jpg"
            alt="your package"
          />
          <p>YOUR 5 DAYS PACKAGE</p>
        </li>
        <li>
          <img src="./assets/images/hotels.jpg" alt="hotels" />
          <p>POPULAR HOTELS</p>
        </li>
      </ul>
    </footer>
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="star-icon" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </symbol>
      <symbol id="border-star-icon" width="24" height="24" viewBox="0 0 24 24">
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </symbol>
    </svg>
  </>
);

export default Desktop;
