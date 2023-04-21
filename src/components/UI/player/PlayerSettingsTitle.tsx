type Props = {
  children: React.ReactNode;
};

const PlayerSettingsTitle = ({ children }: Props) => (
  <div className="flex space-x-4 items-center">{children}</div>
);

export default PlayerSettingsTitle;
