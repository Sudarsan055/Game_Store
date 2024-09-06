import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import TikTacToe from "./components/TikTacToe";
import SnakeGame from "./components/SnakeGame";
import MemoryGame from "./components/MemoryGame";
import Tetris from "./components/Tetris";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
//import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/TikTacToe" Component={TikTacToe} />
        <Route path="/SnakeGame" Component={SnakeGame} />
        <Route path="/MemoryGame" Component={MemoryGame} />
        <Route path="/Tetris" Component={Tetris} />
        <Route path="/Login" Component={Login} />
        <Route path="/SignUp" Component={SignUp} />
      </Routes>
    </div>
  );
}

export default App;
