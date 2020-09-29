import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "assets/scss/style.scss";
import Landing__Pages from "pages/Landing__Pages";

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={Landing__Pages}/>
      </Router>
    </>
  );
}

export default App;
