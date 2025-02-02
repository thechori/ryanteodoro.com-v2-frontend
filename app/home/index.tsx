import Sidebar from "~/components/sidebar";

export function Home() {
  return (
    <main className="flex flex-col sm:flex-row justify-center sm:pt-16 pb-4">
      <Sidebar />

      <div className="w-[200px]">
        <section id="about" className="mb-20">
          <p>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability. Currently, I'm a
            Senior Front-End Engineer at Klaviyo, specializing in accessibility.
          </p>
          <p>
            I contribute to the creation and maintenance of UI components that
            power Klaviyo’s frontend, ensuring our platform meets web
            accessibility standards and best practices to deliver an inclusive
            user experience. In the past,
          </p>
          <p>
            I've had the opportunity to develop software across a variety of
            settings — from advertising agencies and large corporations to
            start-ups and small digital product studios. Additionally, I also
            released a comprehensive video course a few years ago, guiding
            learners through building a web app with the Spotify API.
          </p>
          <p>
            In my spare time, I’m usually climbing, reading, hanging out with my
            wife and two cats, or running around Hyrule searching for Korok
            seeds
          </p>
        </section>

        <section id="experience" className="mb-20">
          <p>here ar esome experiences</p>
          <p>here ar esome experiences</p>
          <p>here ar esome experiences</p>

          <button>see all experiences</button>
        </section>

        <section id="projects" className="mb-20">
          <p>projecst!!!</p>
          <p>projecst!!!</p>
          <p>projecst!!!</p>

          <button>see all projects</button>
        </section>
      </div>
    </main>
  );
}
