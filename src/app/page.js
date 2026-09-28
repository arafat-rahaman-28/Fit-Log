import Image from "next/image";
import Banner from "./components/Banner";
import Workouts from "./components/Workouts";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <Workouts />
    </div>
  );
}
