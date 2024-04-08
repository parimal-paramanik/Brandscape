import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SubmitATool from "./Pages/SubmitATool"
import NewsLetter from "./Pages/NewsLetter"
import AiTool from "./Components/AiTool"
import AIConferences from "./Pages/AIConference"
import Deals from "./Pages/Deals"
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/submit-tool" element = {<SubmitATool />} />
      <Route path="/newsletter" element = {<NewsLetter />} />
      <Route path="/ai-tool" element = {<AiTool />} />
      <Route path="/ai-conference" element = {<AIConferences />} />
      <Route path="/deals" element = {<Deals />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}