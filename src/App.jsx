import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Goals from './components/Goals';
import Thanks from './components/Thanks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LONG_TERM_GOALS, SHORT_TERM_GOALS } from './data/goals';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Goals
        id="program"
        tag="Dlhodobé ciele"
        title="Kam obec smerujem"
        items={LONG_TERM_GOALS}
      />
      <Goals
        tag="Krátkodobé ciele"
        title="Čo chcem zmeniť už teraz"
        items={SHORT_TERM_GOALS}
        alt
      />
      <Thanks />
      <Contact />
      <Footer />
    </>
  );
}
