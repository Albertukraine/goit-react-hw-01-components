import PropTypes from 'prop-types';
import { Fragment } from 'react';
import style from './FriendListItem.module.css';

export const FriendListItem = props => {
  const { avatar, isonline, name } = props;
  return (
    <Fragment>
      <span className={isonline ? style.isOnLine : style.isOffLine}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </Fragment>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isonline: PropTypes.bool,
  name: PropTypes.string,
};
