import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketPlace from '../src/Components/MarketPlace'
import Header from './Components/Pages/Header';
import Hero from './Components/Pages/Hero';
import Create from './Components/Pages/Create';
import Share from './Components/Pages/Share';
import Analyze from './Components/Pages/Analyze';
import Footer from './Components/Pages/Footer';
import GetStartfree from './Components/Pages/GetStartFree';
import LoginPage from './Components/Pages/LoginPage';
import PhoneLogin from './Components/Pages/PhoneLogin';
import Template from './Components/Pages/Template';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Create/>
      <Share/>
      <Analyze/>
      <Footer/>
      {/* <GetStartfree/>
      <LoginPage/>
      <PhoneLogin/> */}
      {/* <Template/> */}
        {/* <MarketPlace/> */}
    </div>
  );
}

export default App;
