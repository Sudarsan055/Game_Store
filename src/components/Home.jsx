import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div
        className="Navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "black",
          // background: "linear-gradient(transparent,rgba(1,0,0,0))",
        }}
      >
        <div style={{ width: "10rem", height: "5rem" }}>
          <img
            src="https://t3.ftcdn.net/jpg/05/99/53/58/360_F_599535831_pwQFVG0qtf6ksLXeVTnUwFMvoW5H0WiS.jpg"
            alt="logo"
            style={{ width: "10rem", height: "5rem", borderRadius: "1rem" }}
          />
        </div>
        <NavLink exact activeClassName="active_class" to="/Login">
          <button
            style={{
              marginRight: "5vw",
              width: "6rem",
              height: "2rem",
              borderRadius: "1rem",
              backgroundColor: "whitesmoke",
            }}
          >
            Log In
          </button>
        </NavLink>
      </div>
      <div style={{ height: "5rem", width: "100vw" }}></div>
      <div className="GameCard">
        <div
          className="GameCardimg"
          style={{
            backgroundImage:
              "url(https://mir-s3-cdn-cf.behance.net/projects/404/1ceffe120087597.Y3JvcCw4MDgsNjMyLDAsMA.jpg)",
            backgroundPositionY: "60%",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink
              exact
              activeClassName="active_class h-[500px]"
              to="/TikTacToe"
            >
              <button
                style={{
                  width: "6rem",
                  height: "2rem",
                  borderRadius: "1rem",
                  backgroundColor: "whitesmoke",
                }}
              >
                Play Now
              </button>
            </NavLink>
          </div>
        </div>
        <div
          className="GameCardimg"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/hand-drawn-memory-game-card_23-2150138540.jpg)",
            // backgroundPositionY: "20%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <NavLink exact activeClassName="active_class" to="/MemoryGame">
              <button
                style={{
                  width: "6rem",
                  height: "2rem",
                  borderRadius: "1rem",
                  backgroundColor: "whitesmoke",
                }}
              >
                Play Now
              </button>
            </NavLink> */}
            <button
              style={{
                width: "6rem",
                height: "2rem",
                borderRadius: "1rem",
                backgroundColor: "whitesmoke",
              }}
            >
              Play Now
            </button>
          </div>
        </div>
        <div
          className="GameCardimg"
          style={{
            backgroundImage:
              "url(https://wallpapers.com/images/featured/card-games-nqjmb9v0v49v2mxl.jpg)",
            // backgroundPositionY: "20%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <NavLink
              exact
              activeClassName="active_class h-[500px]"
              to="/Tetris"
            >
              <button
                style={{
                  width: "6rem",
                  height: "2rem",
                  borderRadius: "1rem",
                  backgroundColor: "whitesmoke",
                }}
              >
                Play Now
              </button>
            </NavLink> */}
            <button
              style={{
                width: "6rem",
                height: "2rem",
                borderRadius: "1rem",
                backgroundColor: "whitesmoke",
              }}
            >
              <a href="https://blackjackchinu.netlify.app/" class="button">
                Play Now
              </a>
            </button>
          </div>
        </div>
        <div
          className="GameCardimg"
          style={{
            backgroundImage:
              "url(https://image.winudf.com/v2/image1/Y29tLmdpc21hcnQucmVhbGRydW0yZnJlZV9zY3JlZW5fMF8xNTg5ODI4MTY0XzA4OQ/screen-0.jpg?fakeurl=1&type=.jpg)",
            // backgroundPositionY: "20%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "6rem",
                height: "2rem",
                borderRadius: "1rem",
                backgroundColor: "whitesmoke",
              }}
            >
              <a href="https://drummachine-7.netlify.app/" class="button">
                Play Now
              </a>
            </button>
          </div>
        </div>
        {/* <div className="GameCardimg">
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{ width: "6rem", height: "2rem", borderRadius: "1rem" }}
            >
              Play Now
            </button>
          </div>
        </div> */}
        {/* <div className='GameCardimg'>
          <div></div>
          <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button style={{width:'6rem',height:'2rem'}}>Play Now</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
