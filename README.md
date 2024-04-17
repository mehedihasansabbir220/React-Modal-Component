# React Modal Component

This is a customizable modal component built with React. It provides a simple and flexible way to display modal dialogs in your React applications.

## Installation

To use this modal component in your React project, follow these steps:

1. Install the component package using npm or yarn:

   ```bash
   npm install --save react-modal-component
   ```

   or

   ```bash
   yarn add react-modal-component
   ```

2. Import the Modal component into your React application:

   ```javascript
   import { Modal } from 'react-modal-component';
   ```

3. You're ready to use the Modal component in your project!

## Usage

The Modal component can be used to display various types of content within a modal dialog. Here's a basic example of how to use the Modal component:

```javascript
import React, { useState } from 'react';
import { Modal } from 'react-modal-component';

function App() {
  const [modalShown, setModalShown] = useState(false);

  const handleModalToggle = () => {
    setModalShown(!modalShown);
  };

  return (
    <div className="App">
      <button onClick={handleModalToggle}>Toggle Modal</button>
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
    </div>
  );
}

export default App;
```

## Props

The Modal component accepts the following props:

- `title` (string): The title of the modal dialog.
- `isShown` (boolean): Controls whether the modal is displayed or hidden.
- `confirmText` (string, optional): Text for the confirmation button.
- `cancelText` (string, optional): Text for the cancel button.
- `onClose` (function): Callback function to handle modal close event.
- `persistent` (boolean, optional): If true, the modal cannot be closed by clicking outside or pressing the escape key.
- `children` (JSX): Content to be displayed within the modal.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
