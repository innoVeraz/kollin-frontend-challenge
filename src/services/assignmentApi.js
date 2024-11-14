import assignments from "../../data/exercises.json";

export function getAssignment(id) {
  const assignment = assignments.find(
    (assignment) => assignment.id.toString() === id.toString()
  );
  if (!assignment) return null;

  return {
    ...assignment,
    answerOptions: assignment.answerOptions.map((x, i) => ({
      ...x,
      id: (i + 1).toString(),
    })),
  };
}

export function getAssignments() {
  return assignments;
}
