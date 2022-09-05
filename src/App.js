import './App.css';
import Navbar from './navBar';
import Hero from '../src/assets/hero.png'
import backgroundHero from '../src/assets/Circle5.png'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='textHero'>Discover <span className='unic'>Unique</span> NFT places</h1>
        <div>
          <img className='heroBanner' alt='#' src={Hero}></img>
        </div>
    </div>
    

  );
}

export default App;
