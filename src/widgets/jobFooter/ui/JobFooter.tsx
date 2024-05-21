import cn from './jobFooter.module.css';
import { Link } from '@shared/ui/link/Link';

type Props = { position: string; company: string; apply: string };

export const JobFooter = ({ position, company, apply }: Props) => {
  return (
    <div className={cn.wrapper}>
      <div className={cn.container}>
        <div className={cn.info}>
          <p className={cn.title}>{position}</p>
          <p className={cn.company}>{company}</p>
        </div>
        <Link link={apply}>Apply now</Link>
      </div>
    </div>
  );
};
