import './app.css';

import Banner from '../components/banner/banner';
import Navbar from '../components/navigatie/navigatie';
import Navlink from "../components/navlink/navlink";
import Logo from '../components/logo/logo';
import Button from '../components/button/button';
import Header from '../components/header/header';
import Over from '../components/over/over';

function App() {
  return (
    <>
      <Banner text="gratis 14 dagen premium"/>
      <Navbar>
        <Logo />
        <Navlink name="Over" />
        <Navlink name="Features" />
        <Navlink name="Prijs" />
        <Navlink name="Contact" />
        <Button name="Login" />
      </Navbar>
      <Header />
      <Over />
    </>
  );
}

export default App;
