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
        <section>
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
