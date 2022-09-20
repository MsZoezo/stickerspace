import './App.css';

import Navbar from '../components/navbar';
import Navlink from "../components/navlink";
import Logo from '../components/logo';
import Button from '../components/button';

function App() {
  return (
    <>
      <Navbar>
        <Logo />
        <Navlink name="Over" />
        <Navlink name="Features" />
        <Navlink name="Prijs"/>
        <Navlink name="Contact"/>
        <Button name="Login"/>
      </Navbar>
    </>
  );
}

export default App;
