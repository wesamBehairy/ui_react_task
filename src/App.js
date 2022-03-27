import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import SectionFour from './components/SectionFour';
import SectionThree from './components/SectionThree';
import SectionTwo from "./components/SectionTwo";
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';
import SectionEight from './components/SectionEight';
import Footer from './components/Footer';
import SectionOne from './components/SectionOne';
import "./components/Fontawesome/index";


function App() {
  return (
    <div className=''>

      <div>
        <SectionOne></SectionOne>
      </div>
      
      <Fragment>
        <SectionTwo></SectionTwo>
      </Fragment>
      <Fragment>
        <SectionThree></SectionThree>
      </Fragment>
      <Fragment>
        <SectionFour></SectionFour>
      </Fragment>
      <Fragment>
        <SectionFive></SectionFive>
      </Fragment>
      <Fragment>
        <SectionSix></SectionSix>
      </Fragment>
      <Fragment>
        <SectionSeven></SectionSeven>
      </Fragment>
      <Fragment>
        <SectionEight></SectionEight>
      </Fragment>
      <Fragment>
        <Footer></Footer>
      </Fragment>

    </div>
  );
}

export default App;
