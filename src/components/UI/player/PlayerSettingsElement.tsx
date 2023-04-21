type Props = {
  children: React.ReactNode;
};

const PlayerSettingsElement = ({ children }: Props) => (
  <div className="flex items-center space-x-4">{children}</div>
);

export default PlayerSettingsElement;
