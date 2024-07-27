import Image from "next/image";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HomePage/>
      <About/>
      <Services/>
      <Team/>
      <Footer/>
    </main>
  );
}
