interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="p-2 bg-blue-600 hover:bg-blue-500 text-gray-200 transition-colors rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
