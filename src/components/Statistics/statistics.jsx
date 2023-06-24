import PropTypes from 'prop-types';
import {StatContainer, StatList, StatItem } from './statistics.styled';

export const Statistics = ({ title = '', stats }) => {
  return (
    <StatContainer>
      {title && <h2 className="title">{title}</h2>}

      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
