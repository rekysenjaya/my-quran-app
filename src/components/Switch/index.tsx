interface SwitchProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = ({ isChecked, onChange }: SwitchProps) => {
  return (
    <div>
      <label className="relative inline-block w-10 h-6 -mb-1.5">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
          className="opacity-0 w-0 h-0 absolute"
        />
        <span
          className={`relative cursor-pointer block w-full h-full rounded-full transition-colors duration-300 ease-in-out p-1 ${
            isChecked ? "bg-sky-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              isChecked ? "translate-x-4" : "translate-x-0"
            }`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default Switch