import Image from "next/image";

export default function Chef() {
  return (
    <div className="px-6 lg:px-20 py-20 w-full flex flex-col lg:flex-row items-center lg:justify-evenly gap-10 lg:gap-0 bg-slate-100 z-10 ">
      <Image src="/food4.jpg" alt="image4" width={1320} height={2048} className="w-[360px] h-[480px] object-cover" />
      <div className="flex flex-col gap-10 max-w-[600px]">
        <div className="flex flex-col gap-4">
          <p>
            In today’s restless world, we take a moment to stand still and contemplate what our era truly means. The simple pleasure of sharing a meal, the precious moments spent
            with those we cherish—these are timeless values that have connected humanity throughout the ages.
          </p>
          <p>
            Asian culinary culture stands at the crossroads of tradition and innovation. Along with the footsteps of travelers along the ancient Silk Road, ingredients and cooking
            methods have transcended borders, evolving into unique expressions. Each region's unique wisdom and character blend into a magnificent kaleidoscope of tastes.{" "}
          </p>
          <p>
            As we live in times that value efficiency and convenience above all, we reimagine our rich heritage through contemporary sensibilities, crafting culinary experiences
            that bridge tradition and creativity.We continuously strive to create an ideal restaurant where the profound value of gastronomy and shared moments lives on through
            generations.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl">Profile</p>
          <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-2">
            <p>1983</p>
            <p>Born in Hokkaido, Japan</p>
            <p>2010</p>
            <p>Trained in Italy under chefs such as Gennaro Esposito of La Torre del Saracino (* Vico Equense) Maurilio Garola of La Ciau del Tornavento (Treiso).</p>
            <p>2015</p>
            <p>Worked as sous-chef for 3 years under Hiroyasu Kawate at Florilège (** Tokyo)</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl">Awards</p>
          <p>MICHELIN Guide Taiwan 2024 **</p>
          <p>Asia’s 50 Best Restaurants 2025 No.26</p>
        </div>
      </div>
    </div>
  );
}
