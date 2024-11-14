"use client";

import Latex from "react-latex-next";
import { UserAction } from "./UserAction";
import { AnswerOption } from "./AnswerOption";
import { GameOver } from "./GameOver";
import { useGameManagement } from "@/hooks/useGameManagement";

export const Assignment = ({ assignment, nextAssignment }) => {
  const { onSubmit, searchParams, userAnswerId } =
    useGameManagement(assignment);

  if (searchParams.get("hearts") < 1) {
    return <GameOver />;
  }

  return (
    <>
      <div>
        <p className="text-xl">
          <Latex>{assignment.questionText}</Latex>
        </p>
      </div>
      <form action={onSubmit}>
        <input type="hidden" name="question" value={assignment.id} />
        <ul className="flex flex-col gap-3">
          {assignment.answerOptions.map((option, index) => (
            <AnswerOption
              key={option.id}
              option={option}
              userAnswerId={userAnswerId}
            />
          ))}
          <UserAction
            userAnswerId={userAnswerId}
            nextAssignment={nextAssignment}
            searchParams={searchParams}
          />
        </ul>
      </form>
    </>
  );
};
