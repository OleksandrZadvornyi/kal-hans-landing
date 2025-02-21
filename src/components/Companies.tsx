import companiesImgAvif from '../assets/images/companies.avif';
import companiesImgWebp from '../assets/images/companies.webp';
import companiesImgJpg from '../assets/images/companies.jpg';

function Companies() {
  return (
    <picture className="w-[50%]">
      <source srcSet={companiesImgAvif} type="image/avif" />
      <source srcSet={companiesImgWebp} type="image/webp" />
      <img
        src={companiesImgJpg}
        alt="Companies that use out products"
        className="w-full"
      />
    </picture>
  );
}

export default Companies;
