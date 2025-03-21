interface PaymentIconProps {
  src: string;
  alt: string;
  className?: string;
}

const PaymentIcon = ({ src, alt, className = '' }: PaymentIconProps) => (
  <div className="flex h-8 w-12 cursor-pointer items-center justify-center rounded-md bg-white outline-2 outline-black/7 duration-500 hover:scale-120">
    <img src={src} alt={alt} className={className} />
  </div>
);

export default PaymentIcon;
