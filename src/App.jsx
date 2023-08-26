import { BrowserRouter } from "react-router-dom";

import {
  About,
  Hero,
  Experience,
  Nav,
  Projects,
  Skills,
  Contact,
} from "./components";

import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative z-0">
        <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Nav />
          <Hero />
        </section>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <section>
          <Contact />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
