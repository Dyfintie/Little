import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen w-full bg-orange-200">
          <Hero />
        </section>
        <section id="about" className="min-h-screen w-full bg-orange-200">
          <About />
        </section>
        <section id="menu" className="min-h-screen w-full bg-orange-200">
          <Menu />
        </section>
        <section id="review" className="min-h-screen w-full bg-orange-200">
          <Review />
        </section>
        <section id="contact" className="min-h-screen w-full bg-orange-200">
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
}
