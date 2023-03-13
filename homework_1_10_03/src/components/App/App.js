import About from '../About/About';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Offer from '../Offer/Offer';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Header />
      <Offer />
      <About />
    </div>
  );
}

export default App;
