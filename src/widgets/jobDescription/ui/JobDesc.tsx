import { Description } from '@shared/ui/description/Description';
import cn from './jobDesc.module.css';
import { subContent } from '@shared/types/card';
import { Link } from '@shared/ui/link/Link';
type Props = {
  postedAt: string;
  contract: string;
  loc: string;
  position: string;
  description: string;
  apply: string;
  requirements: subContent;
  role: subContent;
};
export const JobDesc = (props: Props) => {
  const {
    postedAt,
    contract,
    loc,
    position,
    description,
    apply,
    requirements,
    role,
  } = props;

  return (
    <div className={cn.wrapper}>
      <div className={cn.info}>
        <div>
          <div className={cn.infoDesc}>
            <p>{postedAt}</p>
            <p>{contract}</p>
          </div>
          <div className={cn.infoPos}>
            <p>{position}</p>
            <p>{loc}</p>
          </div>
        </div>
        <Link link={apply}>Apply now</Link>
      </div>
      <div className={cn.description}>
        <div>{description}</div>
        <Description title="Requirements" params={{ ...requirements }} />
        <Description title="What You will Do" params={{ ...role }} />
      </div>
    </div>
  );
};
