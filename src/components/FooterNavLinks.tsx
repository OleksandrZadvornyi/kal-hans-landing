const FooterNavLinks = () => {
  const links = [
    'About Us',
    'Contact Us',
    'Products',
    'Blog',
    'Search',
    'Privacy Policy',
    'Terms of Service',
    'Refund Policy',
    'Cusomization & Gifting',
  ];

  return (
    <ul className="flex flex-col flex-wrap justify-center gap-10 px-5 pt-24 text-center text-white sm:flex-row">
      {links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  );
};

export default FooterNavLinks;
