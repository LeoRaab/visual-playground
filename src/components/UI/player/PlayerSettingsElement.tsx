type Props = {
  children: React.ReactNode;
};

const PlayerSettingsElement = ({ children }: Props) => (
  <div className="flex items-center space-x-4 w-full">{children}</div>
);

export default PlayerSettingsElement;
