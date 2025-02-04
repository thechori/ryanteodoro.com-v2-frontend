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
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability. Currently, I'm a
            Senior Front-End Engineer at Klaviyo, specializing in accessibility.
          </p>
          <p className="mb-3">
            I contribute to the creation and maintenance of UI components that
            power Klaviyo’s frontend, ensuring our platform meets web
            accessibility standards and best practices to deliver an inclusive
            user experience. In the past,
          </p>
          <p className="mb-3">
            I've had the opportunity to develop software across a variety of
            settings — from advertising agencies and large corporations to
            start-ups and small digital product studios. Additionally, I also
            released a comprehensive video course a few years ago, guiding
            learners through building a web app with the Spotify API.
          </p>
          <p className="mb-3">
            In my spare time, I’m usually climbing, reading, hanging out with my
            wife and two cats, or running around Hyrule searching for Korok
            seeds
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
