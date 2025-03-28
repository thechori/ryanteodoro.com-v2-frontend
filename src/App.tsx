import _ from "lodash";
//
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import About from "./components/about";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Education from "./components/education";

function App() {
  return (
    <main className="container mx-auto max-w-[1200px] px-4 flex flex-col sm:flex-row justify-center sm:pt-16 pb-4">
      <Sidebar />

      <div className="flex-1 w-full pr-4">
        <About />
        <Experiences />
        <Projects />
        <Education />
        <Footer />
      </div>
    </main>
  );
}

export default App;
