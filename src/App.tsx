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
import { withScrollAnimation } from './components/animations/withScrollAnimation';

// Enhance components with scroll animation
const AnimatedHeader = withScrollAnimation(Header);
const AnimatedHero = withScrollAnimation(Hero);
const AnimatedAboutIntro = withScrollAnimation(AboutIntro);
const AnimatedProducts = withScrollAnimation(Products);
const AnimatedIngredients = withScrollAnimation(Ingredients);
const AnimatedInstagram = withScrollAnimation(InstagramWrapper);
const AnimatedCompanies = withScrollAnimation(Companies);
const AnimatedEndorsement = withScrollAnimation(Endorsement);
const AnimatedNewsletter = withScrollAnimation(Newsletter);
const AnimatedHistory = withScrollAnimation(History);
const AnimatedBlogs = withScrollAnimation(Blogs);
const AnimatedFooter = withScrollAnimation(Footer);
const AnimatedDiscountMessage = withScrollAnimation(DiscountMessage);

function App() {
  return (
    <>
      <AnimatedDiscountMessage />
      <AnimatedHeader />
      <main>
        <AnimatedHero />
        <AnimatedAboutIntro />
        <AnimatedProducts />
        <AnimatedIngredients />
        <AnimatedInstagram />
        <OrderForm />
        <AnimatedCompanies />
        <AnimatedEndorsement />
        <AnimatedNewsletter />
        <AnimatedHistory />
        <AnimatedBlogs />
      </main>
      <AnimatedFooter />
    </>
  );
}

export default App;
