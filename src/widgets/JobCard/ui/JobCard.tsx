import { useNavigate } from 'react-router-dom';

import { cardInfo } from '@shared/types/card';

import cn from './jobCard.module.css';

export const JobCard = ({ data }: cardInfo) => {
  const {
    id,
    logo,
    company,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
  } = data;

  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/${id}`, { state: { id } });

  return (
    <article className={cn.wrapper} onClick={navigateHandler}>
      <div className={cn.image} style={{ backgroundColor: logoBackground }}>
        <img src={logo} alt={company} />
      </div>
      <div className={cn.container}>
        <div className={cn.positionInfo}>
          <div>{postedAt}</div>
          <div>{contract}</div>
        </div>
        <div className={cn.positionTitle}>{position}</div>
        <div className={cn.companyName}>{company}</div>
        <div className={cn.positionLocation}>{location}</div>
      </div>
    </article>
  );
};
