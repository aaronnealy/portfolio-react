import React from 'react';
import Nav from "./components/Navbar/nav"
import Landing from "./pages/Landing/landing"


class App extends React.Component {

  
  render(){
  return (
    <div>
    <Nav />
    <Landing></Landing>
    </div>
  );
}
}
export default App;
