type Props = {
  children: React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
  keepActive?: boolean;
  isMain?: boolean;
};

const PlayerButton = ({ children, onClick, isDisabled, keepActive, isMain }: Props) => {
  let className: string | undefined;

  if (!isDisabled) className += ' hover:text-fuchsia-400';

  if (keepActive) className += ' text-fuchsia-400';

  if (isMain)
    className =
      'bg-stone-800 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-2 ring-fuchsia-400 text-fuchsia-400 hover:text-stone-500 shadow-md flex items-center justify-center';

  return (
    <button type="button" className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default PlayerButton;
