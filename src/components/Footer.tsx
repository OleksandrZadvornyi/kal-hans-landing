import FooterNavLinks from './FooterNavLinks';
import SocialIcons from './SocialIcons';
import PaymentMethods from './PaymentMethods';

function Footer() {
  return (
    <footer className="bg-accent">
      <FooterNavLinks />
      <SocialIcons />
      <p className="pt-12 pb-5 text-center text-white">
        @ 2025 Kal Hans Naturals
      </p>
      <PaymentMethods />
    </footer>
  );
}

export default Footer;
