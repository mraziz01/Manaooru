import Hero from './Hero.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MotionClientList from './MotionClientList.jsx';
import ContactUs from './ContactUs.jsx';
import StorySection from './StorySection.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/MotionClientList" element={<MotionClientList />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Storysection" element={<StorySection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
