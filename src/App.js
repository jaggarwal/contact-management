import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={ContactList} />
        <Route path="/contact/:id" component={ContactDetails} />
      </Routes>
    </Router>
  );
}

export default App;