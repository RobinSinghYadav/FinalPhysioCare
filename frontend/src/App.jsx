import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointments from './pages/Appointments';
import Services from './pages/Services';  // Importing the Services overview page
import VideoConsultation from './pages/VideoConsultation';
import VirtualExercise from './pages/VirtualExercise';
import LiveExerciseTraining from './pages/LiveExerciseTraining';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointments />} />
        
        {/* Services Overview and Sub-Pages */}
        <Route path="/" element={<Home />} />
        {/* ye wala 3 Doubts hai */}
    <Route path="/service/video-consultation" element={<VideoConsultation />} />
    <Route path="/service/virtual-exercise" element={<VirtualExercise />} />
    <Route path="/service/live-exercise-training" element={<LiveExerciseTraining />} />
    
        <Route path='/services' element={<Services />} />
        <Route path='/services/video-consultation' element={<VideoConsultation />} />
        <Route path='/services/virtual-exercise' element={<VirtualExercise />} />
        <Route path='/services/live-exercise-training' element={<LiveExerciseTraining />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
