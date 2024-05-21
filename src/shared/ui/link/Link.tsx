import cn from './link.module.css';

type Props = {
  children: string;
  link: string;
  type?: 'accent' | 'primary';
};

export const Link = (props: Props) => {
  const { children, link, type = 'primary' } = props;

  return (
    <a href={link} target="_blank" className={`${cn.link} ${cn[type]}`}>
      {children}
    </a>
  );
};
