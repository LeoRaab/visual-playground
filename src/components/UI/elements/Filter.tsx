import { SoundFilter } from '../../../type-definitions';
import CheckBox from './CheckBox';

type Props = {
  filter: SoundFilter;
  onSelect: () => void;
  onChange: (value: number) => void;
};

const Filter = ({ filter, onSelect, onChange }: Props) => {
  return (
    <div className="flex items-center justify-between space-x-4 w-full">
      <div className="w-1/3">
        <CheckBox label={filter.type} isChecked={filter.isOn} onClick={onSelect} />
      </div>
      <div className="flex-1">
        <input
          type="range"
          min={filter.min}
          max={filter.max}
          value={filter.value}
          onChange={(e) => onChange(e.target.valueAsNumber)}
          step={filter.step}
          className="w-full"
        />
      </div>
      <p className="font-light w-1/5 text-right">
        {filter.value} {filter.unit}
      </p>
    </div>
  );
};

export default Filter;
