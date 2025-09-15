import { exportTraceState } from "next/dist/trace";
import { SlCursor, SlCup, SlGlobe, SlEarphonesAlt, SlEnvolopeLetter, SlMap, SlPlane, SlSocialInstagram, SlSupport, SlTag, SlSocialDropbox, SlPrinter } from "react-icons/sl";

export type RoomInfo = {
  title: string;
  price: number;
  rating: number;
  image: number;
};
export const cities: Record<string, RoomInfo[]> = {
  Seoul: [
    { title: "Guesthouse in Seoul", price: 3234, rating: 4.88, image: 1 },
    { title: "Room in Seoul", price: 3234, rating: 4.88, image: 2 },
    { title: "Apartment in Seoul", price: 3234, rating: 4.88, image: 3 },
    { title: "Room in Seoul", price: 3234, rating: 4.88, image: 4 },
    { title: "Guesthouse in Seoul", price: 3234, rating: 4.88, image: 5 },
    { title: "Room in Seoul", price: 3234, rating: 4.88, image: 6 },
    { title: "Apartment in Seoul", price: 3234, rating: 4.88, image: 7 },
    { title: "Room in Seoul", price: 3234, rating: 4.88, image: 8 },
  ],
  Tokyo: [
    { title: "Room in Tokyo", price: 3234, rating: 4.88, image: 8 },
    { title: "Apartment in Tokyo", price: 3234, rating: 4.88, image: 7 },
    { title: "Guesthouse in Tokyo", price: 3234, rating: 4.88, image: 6 },
    { title: "Guesthouse in Tokyo", price: 3234, rating: 4.88, image: 5 },
    { title: "Room in Tokyo", price: 3234, rating: 4.88, image: 4 },
    { title: "Apartment in Tokyo", price: 3234, rating: 4.88, image: 3 },
    { title: "Guesthouse in Tokyo", price: 3234, rating: 4.88, image: 2 },
    { title: "Guesthouse in Tokyo", price: 3234, rating: 4.88, image: 1 },
  ],
  Bangkok: [
    { title: "Guesthouse in Bangkok", price: 3234, rating: 4.88, image: 1 },
    { title: "Room in Bangkok", price: 3234, rating: 4.88, image: 2 },
    { title: "Apartment in Bangkok", price: 3234, rating: 4.88, image: 3 },
    { title: "Guesthouse in Bangkok", price: 3234, rating: 4.88, image: 4 },
    { title: "Guesthouse in Bangkok", price: 3234, rating: 4.88, image: 5 },
    { title: "Room in Bangkok", price: 3234, rating: 4.88, image: 6 },
    { title: "Apartment in Bangkok", price: 3234, rating: 4.88, image: 7 },
    { title: "Guesthouse in Bangkok", price: 3234, rating: 4.88, image: 8 },
  ],
};

export const wherePlaces = [
  {
    title: "Nearby",
    subtitle: "Find what's around you",
    src: "/airbnb/nenarby.jpg",
    icon: SlCursor,
    color: "text-red-500",
  },
  {
    title: "New York, United States",
    subtitle: "For sights like Central Park",
    src: "/airbnb/new-york.jpg",
    icon: SlCup,
    color: "text-orange-500",
  },
  {
    title: "Paris, France",
    subtitle: "For sights like the Eiffel Tower",
    src: "/airbnb/paris.jpg",
    icon: SlEarphonesAlt,
    color: "text-yellow-500",
  },

  {
    title: "Tokyo, Japan",
    subtitle: "For sights like the Tokyo Tower",
    src: "/airbnb/tokyo.jpg",
    icon: SlMap,
    color: "text-green-500",
  },
  {
    title: "London, U.K.",
    subtitle: "For sights like the London Eye",
    src: "/airbnb/london.jpg",
    icon: SlPlane,
    color: "text-emerald-500",
  },
  {
    title: "Sydney, Australia",
    subtitle: "For sights like the Sydney Opera House",
    src: "/airbnb/sydney.jpg",
    icon: SlSocialInstagram,
    color: "text-cyan-500",
  },
  {
    title: "Rome, Italy",
    subtitle: "For sights like the Colosseum",
    src: "/airbnb/rome.jpg",
    icon: SlSupport,
    color: "text-indigo-500",
  },
  {
    title: "Barcelona, Spain",
    subtitle: "For sights like the Sagrada Familia",
    src: "/airbnb/barcelona.jpg",
    icon: SlTag,
    color: "text-purple-500",
  },
  {
    title: "Berlin, Germany",
    subtitle: "For sights like the Brandenburg Gate",
    src: "/airbnb/berlin.jpg",
    icon: SlSocialDropbox,
    color: "text-pink-500",
  },
  {
    title: "Amsterdam, Netherlands",
    subtitle: "For sights like the Anne Frank House",
    src: "/airbnb/amsterdam.jpg",
    icon: SlPrinter,
    color: "text-amber-500",
  },
  {
    title: "Moscow, Russia",
    subtitle: "For sights like the Red Square",
    src: "/airbnb/moscow.jpg",
    icon: SlEnvolopeLetter,
    color: "text-teal-500",
  },
];

export type DateMargin = {
  text: string;
  value: number;
};
export const dateMargins: DateMargin[] = [
  {
    text: "Exact dates",
    value: 0,
  },
  {
    text: "± 1 day",
    value: 1,
  },
  {
    text: "± 2 days",
    value: 2,
  },
  {
    text: "± 3 days",
    value: 3,
  },
  {
    text: "± 7 days",
    value: 7,
  },
  {
    text: "± 14 days",
    value: 14,
  },
];
