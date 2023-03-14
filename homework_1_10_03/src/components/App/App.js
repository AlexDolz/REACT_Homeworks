import About from '../About/About';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Offer from '../Offer/Offer';
import Rental from '../Rental/Rental';
import ServicesList from '../ServicesList/ServicesList';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Header />
      <Offer />
      <About />
      <ServicesList />
      <Rental />
    </div>
  );
}

export default App;
