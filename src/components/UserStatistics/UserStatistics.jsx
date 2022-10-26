import PropTypes from 'prop-types';
import css from './UserStatistics.module.css';

export const UserStatistics = props => {
  const { stats, title } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => (
          <li className={css.userStatItem} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

UserStatistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
