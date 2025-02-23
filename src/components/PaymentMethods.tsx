import airtel from '/src/assets/images/icons/airtel.png';
import amex from '/src/assets/images/icons/amex.png';
import applePay from '/src/assets/images/icons/apple-pay.png';
import firefoxSend from '/src/assets/images/icons/firefox-send.png';
import googlePay from '/src/assets/images/icons/google-pay.png';
import mastercard from '/src/assets/images/icons/mastercard.png';
import masterpass from '/src/assets/images/icons/masterpass.png';
import rupay from '/src/assets/images/icons/rupay.png';
import visa from '/src/assets/images/icons/visa.png';
import PaymentIcon from './PaymentIcon';

const PaymentMethods = () => {
  const paymentMethods = [
    { src: airtel, alt: 'Airtel', className: 'min-w-[150%]' },
    { src: amex, alt: 'American Express', className: 'rounded-md' },
    { src: firefoxSend, alt: 'Firefox Send', className: 'w-[50%]' },
    { src: googlePay, alt: 'Google Pay', className: 'w-[75%]' },
    { src: mastercard, alt: 'Mastercard', className: 'w-[60%]' },
    { src: masterpass, alt: 'Masterpass', className: 'w-[65%]' },
    { src: applePay, alt: 'Apple Pay', className: 'w-[75%]' },
    { src: rupay, alt: 'RuPay', className: 'w-[85%]' },
    { src: visa, alt: 'Visa', className: 'w-[75%]' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pb-24">
      {paymentMethods.map(({ src, alt, className }) => (
        <PaymentIcon key={alt} src={src} alt={alt} className={className} />
      ))}
    </div>
  );
};

export default PaymentMethods;
