import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Course from './components/Course';
import About from './components/About';
import List from './components/List';
import Teacher from './components/Teacher';
import Modal from './components/Modal';

function App() {

  const [statePage, setPage] = useState('index');
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [courseId, setCourseId] = useState(null);

  function openPage (newPage) {
    setPage(newPage);
  }

  function newCourseId (id) {
    setCourseId(id);
  }

  function observeModal (newStateModal, courseData) {
    setModal(newStateModal);
    setModalData(courseData);
  }

  function showModal () {
    if (modal) {
      return <Modal showModal={observeModal} courseData={modalData}/>
    }
  }

  return (
    <div className="App wrapper">
      <Header 
      updatePage={openPage}/>

      { (() => {
          if (statePage === 'index') {
            return <Index openModal={observeModal}/>
          } else if (statePage === 'courses') {
            return <List openModal={observeModal} updatePage={openPage} newCourseId={newCourseId}/>
            // return <Course />
          } else if (statePage === 'teachers') {
            return <Teacher />
          } else if (statePage === 'about') {
            return <About />
          } else if (statePage === 'course') {
            return <Course courseId={courseId} openModal={observeModal}/>
          }
        })()
      }

      <Footer />

      {showModal()}
    </div>
  );
}

export default App;
