export const Pill = ({ status, isActive }) => {
  let border = "";
  if (isActive) {
    border = "border-2 border-solid border-blue-500";
  }
  let bgColor = "bg-gray-300";
  if (status === "correct") {
    bgColor = "bg-[#66C61C]";
  }
  if (status === "incorrect") {
    bgColor = "bg-[#F79009]";
  }

  return <div className={`h-3 w-20 rounded-full flex ${border} ${bgColor}`} />;
};
