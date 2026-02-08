interface CustomButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-4 bg-habita hover:bg-blue-600 text-white rounded-xl text-center transition ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
