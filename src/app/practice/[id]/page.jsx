import assignments from "../../../data/exercises.json";
import "katex/dist/katex.min.css";

import { ProgressBar } from "@/components/ProgressBar";
import { Assignment } from "@/components/Assignment";

export default function Page({ params }) {
  const assignment = assignments.find((x) => x.id === params.id);

  const index = assignments.findIndex((x) => x.id === assignment.id);
  const nextAssignment =
    index >= 0 && index < assignments.length - 1
      ? assignments[index + 1]
      : null;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#586FB5]">
      <h1 className="pt-24 pl-8 pr-8 text-center text-white text-4xl">
        Trigonometriska funktioner & identiteter
      </h1>
      <div className="bg-white text-black w-[888px] pl-[191px] pr-[191px] rounded-t-[5rem] p-8 mt-8 flex flex-col gap-8">
        <ProgressBar assignments={assignments} />
        <Assignment assignment={assignment} nextAssignment={nextAssignment} />
      </div>
    </div>
  );
}
