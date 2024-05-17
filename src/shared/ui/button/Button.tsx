import cn from './button.module.css';

type Props = {
  children: string;
  onClickHandler: () => void;
  type?: 'accent' | 'primary';
};

export const Button = (props: Props) => {
  const { children, onClickHandler, type = 'primary' } = props;

  return (
    <button onClick={onClickHandler} className={`${cn.btn} ${cn[type]}`}>
      {children}
    </button>
  );
};
