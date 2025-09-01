export default function Hero() {
  return (
    <div className="pt-12 relative w-full grid grid-cols-2">
      <div className="space-y-8">
        <p className="text-[5.6rem] leading-[1.1] font-bold">Financial infrastructure to grow your revenue</p>
        <p className="text-lg">
          Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable
          business.
        </p>
      </div>
      <div className="w-[300px] h-[400px] border justify-self-end self-center flex items-center justify-center rounded-3xl">image</div>
    </div>
  );
}
