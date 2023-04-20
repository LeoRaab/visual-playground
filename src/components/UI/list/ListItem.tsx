type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const ListItem = ({ children, onClick }: Props) => (
  <div className="p-4 hover:bg-fuchsia-400 hover:text-stone-900 cursor-pointer" onClick={onClick}>
    {children}
  </div>
);

export default ListItem;
