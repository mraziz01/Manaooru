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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
