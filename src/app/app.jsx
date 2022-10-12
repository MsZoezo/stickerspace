import './app.css';

import Banner from '../components/banner/banner';
import Navbar from '../components/navigatie/navigatie';
import Navlink from "../components/navlink/navlink";
import Button from '../components/button/button';
import Header from '../components/header/header';
import Over from '../components/over/over';
import Feature from '../components/feature/feature';
import FlexGrid from '../components/flexgrid/flexgrid';

function App() {
  return (
    <>
      <Banner text="gratis 14 dagen premium" />

      <Navbar
        links={
          <>
            <Navlink name="Over" />
            <Navlink name="Features" />
            <Navlink name="Prijs" />
            <Navlink name="Contact" />
          </>
        }

        button={
          <Button name="Login" />
        }
      />

      <Header />
      <Over />

      <FlexGrid title="Onze features" maxWidth="150rem">
        <Feature title="Pog" description="Very pog feature yes" img="/images/sticker1.svg" alt=""/>
        <Feature title="Pog" description="Very pog feature yes" img="/images/sticker2.svg" alt=""/>
        <Feature title="Pog" description="Very pog feature yes" img="/images/sticker3.svg" alt=""/>
        <Feature title="Pog" description="Very pog feature yes" img="/images/sticker4.svg" alt=""/>
      </FlexGrid>

      <FlexGrid title="Prijs"></FlexGrid>
    </>
  );

}

export default App;
