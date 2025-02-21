import './App.css';
import DiscountMessage from './components/DiscountMessage';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import AboutIntro from './components/AboutIntro';
import Products from './components/Products';
import Ingredients from './components/Ingredients';
import InstagramWrapper from './components/InstagramWrapper';
import OrderForm from './components/OrderForm';

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
        <Ingredients />
        <InstagramWrapper />
        <OrderForm />
      </main>
    </>
  );
}

export default App;
