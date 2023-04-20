import CheckBox from '../elements/CheckBox';

const PlayerSettings = () => {
  return (
    <div className="bg-stone-800 rounded-t-xl px-6 py-8">
      <div className="flex items-center space-x-4">
        <CheckBox label="BiPolar" isChecked={false} onClick={() => console.log()} />
      </div>
    </div>
  );
};

export default PlayerSettings;
