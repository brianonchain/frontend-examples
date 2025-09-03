export default function Hero() {
  return (
    <div className="pt-20 relative w-full min-h-[600px] grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-8">
        <p className="text-5xl lg:text-[5.6rem] leading-[1.1] text-black font-bold">Financial infrastructure to grow your revenue</p>
        <p className="text-lg">
          Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable
          business.
        </p>
      </div>
      <div className="hidden lg:flex w-[300px] h-[400px] border justify-self-end self-center items-center justify-center rounded-3xl">image</div>
    </div>
  );
}
