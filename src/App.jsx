import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SubmitATool from "./Pages/SubmitATool"
import NewsLetter from "./Pages/NewsLetter"
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/submit-tool" element = {<SubmitATool />} />
      <Route path="/newsletter" element = {<NewsLetter />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}