import cn from './loading.module.css';

export const Loading = () => {
  return (
    <div className={cn.wrapper}>
      <div className={cn.loader}></div>
      <div className={cn.title}>Loading</div>
    </div>
  );
};
