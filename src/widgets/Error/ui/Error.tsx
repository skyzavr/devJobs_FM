import cn from './error.module.css';

export const Error = ({ msg = 'Something went wrong' }: { msg: string }) => {
  return (
    <div className={cn.wrapper}>
      <div className={cn.title}>{msg}</div>
    </div>
  );
};
