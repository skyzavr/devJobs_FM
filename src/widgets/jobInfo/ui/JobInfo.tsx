import cn from './jobInfo.module.css';
import { Link } from '@shared/ui/link/Link';

type Props = {
  logoBackground: string;
  logo: string;
  company: string;
  website: string;
};
export const JobInfo = (props: Props) => {
  const { logoBackground: bgr, logo, company, website } = props;

  return (
    <div className={cn.wrapper}>
      <div className={cn.container}>
        <div style={{ backgroundColor: bgr }} className={cn.logoBgr}>
          <img src={logo} alt={company} />
        </div>
        <div className={cn.info}>
          <p className={cn.title}>{company}</p>
          <a href={website} target="_blank" className={cn.link}>
            {company.toLowerCase()}.com
          </a>
        </div>
      </div>
      <Link type="accent" link={website}>
        Visit
      </Link>
    </div>
  );
};
