import { SoundFilter } from '../../../type-definitions';
import CheckBox from './CheckBox';

type Props = {
  filter: SoundFilter;
  onSelect: () => void;
  onChange: (value: number) => void;
};

const Filter = ({ filter, onSelect, onChange }: Props) => {
  return (
    <>
      <CheckBox label={filter.type} isChecked={filter.isOn} onClick={onSelect} />
      <input
        type="range"
        min={filter.min}
        max={filter.max}
        value={filter.value}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        step={filter.step}
      />
      <p className="font-light w-full">
        {filter.value} {filter.unit}
      </p>
    </>
  );
};

export default Filter;
