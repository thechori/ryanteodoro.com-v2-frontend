import Button from "./components/button";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="bg-slate-100 dark:bg-slate-900 container mx-auto max-w-[1200px] px-4 flex flex-col sm:flex-row justify-center sm:pt-16 pb-4 dark:text-red-500">
      <Sidebar />

      <div className="flex-1 w-full pr-4">
        <section id="about" className="mb-20">
          <h2 className="text-2xl font-bold">about</h2>
          <p className="mb-3">
            I'm a 3D animator turned software engineer/entrepreneur with a
            passion for digital media. I grew up building computers and playing
            video games and fell in love with the world of software when I was
            forced to learn Java as part of my college curriculum. My favorite
            work is found at the intersection of cutting-edge technology,
            practical decisions, and positive tangible outcomes to my end users.
          </p>
          <p>
            Currently, I'm founder and CEO at 4ccessible where I specialize in
            the application of AI in the context of digital accessibility. My
            startup was accepted into the startup centers at Google and Amazon
            in Tokyo and was recently announced as an Innovation Award finalist
            for SXSW 2025.
          </p>
          <p className="mb-3"></p>
          <p className="mb-3">
            I've had the opportunity to develop software across nearly all
            industries — from big tech (HP) and large corporations (Shell) to
            YC-backed startups (Perl Street [YC W22]), small digital product
            studios, non-profits, and so much more.
          </p>
          <p className="mb-3">
            In my spare time, you'll find me in coffee shops hacking on{" "}
            <a href="">my side projects</a>, drifting my boosted Scion FRS at{" "}
            <a href="https://lonestardrift.com/" target="_blank">
              Lone Start Drift
            </a>{" "}
            or{" "}
            <a href="https://iasdrift.com/" target="_blank">
              IAS Drift
            </a>
            , or playing tennis with friends.
          </p>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-2xl font-bold">experience</h2>
          <p>here ar esome experiences</p>
          <p>here ar esome experiences</p>
          <p>here ar esome experiences</p>

          <Button
            title="see all experiences"
            className="my-2"
            variant="outline"
          />
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold">projects</h2>
          <p>projecst!!!</p>
          <p>projecst!!!</p>
          <p>projecst!!!</p>

          <Button title="see all projects" className="my-2" variant="outline" />
        </section>
      </div>
    </main>
  );
}

export default App;
