type props = { onClick: () => void; cl: string; value: string | number };

export const ListBtn = ({ onClick, cl, value }: props) => {
  return (
    <li className={cl} onClick={onClick}>
      {value}
    </li>
  );
};
