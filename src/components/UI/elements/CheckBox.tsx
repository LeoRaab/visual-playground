type Props = {
  label: string;
  isChecked: boolean;
  onClick: () => void;
};

const CheckBox = ({ label, isChecked, onClick }: Props) => (
  <div className="flex gap-x-4 w-full items-center" onClick={onClick}>
    <input
      type="checkbox"
      id="rotate"
      name="rotate"
      onChange={onClick}
      checked={isChecked}
      className="rounded-md bg-stone-800 border-fuchsia-400 border-2 text-fuchsia-400 focus:ring-fuchsia-400"
    />

    <label>{label}</label>
  </div>
);

export default CheckBox;
