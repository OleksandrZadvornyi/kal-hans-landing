import './App.css';
import DiscountMessage from './components/DiscountMessage';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <DiscountMessage />
      <header>
        <HeaderNav />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
