import { FaMicrosoft, FaAmazon, FaSpotify, FaSlack, FaShopify, FaAirbnb, FaStripe } from "react-icons/fa6";

export default function Sponsors() {
  const sponsors = [
    { name: "Microsoft", icon: FaMicrosoft },
    { name: "Amazon", icon: FaAmazon },
    { name: "Spotify", icon: FaSpotify },
    { name: "Slack", icon: FaSlack },
    { name: "Shopify", icon: FaShopify },
    { name: "Airbnb", icon: FaAirbnb },
  ];

  return (
    <div className="w-full py-20 overflow-hidden border-b border-slate-800">
      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-githubDarkBlue to-transparent z-10 pointer-events-none"></div>

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-githubDarkBlue to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of sponsors */}
          <div className="flex items-center space-x-16 text-slate-400 text-3xl font-semibold">
            {sponsors.map((sponsor, index) => (
              <span key={`sponsor-1-${index}`} className="flex items-center space-x-3">
                <sponsor.icon className="w-16 h-16" />
                <span>{sponsor.name}</span>
              </span>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 text-slate-400 text-3xl font-semibold ml-16">
            {sponsors.map((sponsor, index) => (
              <span key={`sponsor-2-${index}`} className="flex items-center space-x-3">
                <sponsor.icon className="w-16 h-16" />
                <span>{sponsor.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
