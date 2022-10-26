import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendList = props => {
  const { friends } = props;
  console.log(friends);
  
  return (
    <ul className={style.friendList}>
      {friends.map(item => (
        <li className={style.item} key={item.id}>
          <span className={item.isOnline ? style.isOnLine : style.isOffLine}></span>
          <img
            className={style.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={style.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
