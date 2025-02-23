import './App.css';
import DiscountMessage from './components/DiscountMessage';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutIntro from './components/AboutIntro';
import Products from './components/Products';
import Ingredients from './components/Ingredients';
import InstagramWrapper from './components/InstagramWrapper';
import OrderForm from './components/OrderForm';
import Companies from './components/Companies';
import Endorsement from './components/Endorsement';
import Newsletter from './components/Newsletter';
import History from './components/History';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <DiscountMessage />
      <Header />
      <main>
        <Hero />
        <AboutIntro />
        <Products />
        <Ingredients />
        <InstagramWrapper />
        <OrderForm />
        <Companies />
        <Endorsement />
        <Newsletter />
        <History />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}

export default App;
