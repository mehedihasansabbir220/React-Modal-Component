import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal } from './Modal';


function App() {
  const [modalShown, setModalShown] = useState(false);

  const handleModalToggle = () => {
    setModalShown(!modalShown);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleModalToggle}>Toggle Modal</button>
        {/* Render the CustomModal component */}
        <Modal
          title="Example Modal"
          isShown={modalShown}
          onClose={handleModalToggle}
          confirmText="Confirm"
          cancelText="Cancel"
          persistent={true}
        >
          <p>This is the content of the modal. You can add any JSX content here!</p>
          <ul>
            <li>Demo Item 1</li>
            <li>Demo Item 2</li>
            <li>Demo Item 3</li>
          </ul>
        </Modal>
      </header>
    </div>
  );
}

export default App;
