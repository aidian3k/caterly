interface ButtonProps {
  label: string;
  variant?: "default" | "danger";
  onClick: () => void;
}

export default function Button({
  label,
  onClick,
  variant = "default",
}: ButtonProps) {
  let buttonStyle = "p-2 text-gray-200 transition-colors rounded-md";

  switch (variant) {
    case "default":
      buttonStyle += " bg-blue-600 hover:bg-blue-500";
      break;
    case "danger":
      buttonStyle += " bg-red-600 hover:bg-red-500";
      break;
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}
