import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./pages/Chat/Chat";
import Explore from "././pages/Explorar/Explorar"
import Create from "././pages/Create/Create"
import Profile from "./pages/Profile/Profile";
import Reels from "./pages/Reels/Reels"


function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<Chat />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reels" element={<Reels />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
