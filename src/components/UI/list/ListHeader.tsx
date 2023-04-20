type Props = {
  title: string;
};

const ListHeader = ({ title }: Props) => {
  return (
    <div className="p-1 mt-2 bg-fuchsia-400 text-stone-900 uppercase text-right tracking-widest">
      {title}
    </div>
  );
};

export default ListHeader;
