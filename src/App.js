// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer"; // ✅ import

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/post" element={<Post />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <WhatsAppButton />
      <Footer /> {/* ✅ Add Footer here */}
    </BrowserRouter>
  );
}

export default App;