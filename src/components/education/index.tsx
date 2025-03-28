import { Badge } from "../../components/badge";

const Education = () => (
  <section id="education" className="mb-10 sm:mb-12 md:mb-20">
    <h2 className="text-3xl font-bold mb-4 3b-1 border-b-2">education</h2>

    <div className="mb-4">
      <div className="flex justify-between">
        <div className="flex">
          <div className="font-semibold pr-1">
            University of Houston - Victoria
          </div>
        </div>
        <div className="font-semibold text-teal-600">May 2013</div>
      </div>
      <div>Bachelor of Science in Computer Science</div>
      <div className="flex flex-wrap gap-2 mt-1">
        {["Graduated Cum Laude (3.52 GPA)", "Dean's List recipient"].map(
          (element, index) => (
            <Badge key={index}>{element}</Badge>
          )
        )}
      </div>
    </div>
  </section>
);

export default Education;
