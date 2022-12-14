import './app.css';

import Banner from '../components/banner/banner';
import Navbar from '../components/navigatie/navigatie';
import Navlink from "../components/navlink/navlink";
import Button from '../components/button/button';
import Header from '../components/header/header';
import Over from '../components/over/over';
import Feature from '../components/feature/feature';
import FlexGrid from '../components/flexgrid/flexgrid';
import Abonnement from '../components/abonnement/abonnement';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

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
        <Feature title="Stickers" description="Duizenden stickers tot je beschikking." img="/images/sticker1.svg" alt=""/>
        <Feature title="Artificial Intelligence" description="AI curated collecties." img="/images/sticker2.svg" alt=""/>
        <Feature title="Feature" description="Nog een coole feature" img="/images/sticker3.svg" alt=""/>
        <Feature title="Feature" description="Ik heb echt geen idee" img="/images/sticker4.svg" alt=""/>
      </FlexGrid>

      <FlexGrid title="Prijs">
        <Abonnement name="Free" price="Niets!" duration="voor altijd" features={["1 Collectie", "100 Stickers"]}/>
        <Abonnement name="Basic" price="€5 EUR/maand" duration="maandelijks" features={["10 Collecties", "1000 Stickers"]} best={true} />
        <Abonnement name="Premium" duration="maandelijks" price="€7,50 EUR/maand" features={["Oneindige collecties!", "Oneindige stickers!"]} />
      </FlexGrid>

      <Contact />

      <Footer />
    </>
  );

}

export default App;
