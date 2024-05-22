import cn from './jobCardSkeleton.module.css';
export const JobCardSkeleton = () => {
  return (
    <article className={cn.wrapper}>
      <div className={cn.image}></div>
      <div className={cn.container}>
        <div className={cn.positionInfo}>
          <div></div>
          <div></div>
        </div>
        <div className={cn.positionTitle}></div>
        <div className={cn.companyName}></div>
        <div className={cn.positionLocation}></div>
      </div>
    </article>
  );
};
