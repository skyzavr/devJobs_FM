import cn from './desc.module.css';
type Props = {
  title: string;
  params: {
    content: string;
    items: string[];
  };
};
export const Description = ({ title, params }: Props) => {
  return (
    <div className={cn.wrapper}>
      <div className={cn.title}>{title}</div>
      <div className={cn.desc}>
        <div>{params.content}</div>
        <ul>
          {params.items.map((el, ind) => (
            <li key={ind}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
