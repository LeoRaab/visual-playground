type Props = {
  children: React.ReactNode;
};

const List = ({ children }: Props) => (
  <div className="flex flex-col rounded-sm p-4 bg-stone-800 divide-y-4 divide-dashed divide-fuchsia-400">
    {children}
  </div>
);

export default List;
