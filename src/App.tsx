import './App.css';
import DiscountMessage from './components/DiscountMessage';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import AboutIntro from './components/AboutIntro';
import Products from './components/Products';

function App() {
  return (
    <>
      <DiscountMessage />
      <header>
        <HeaderNav />
      </header>
      <main>
        <Hero />
        <AboutIntro />
        <Products />
      </main>
    </>
  );
}

export default App;
