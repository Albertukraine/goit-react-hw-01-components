import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = (props) => {
    const {friends} = props;
  return <ul className={css.friendList}>{friends.map(item => (
    <li className={css.item} key={item.id}>
      
      <span className={css.isOffLine}></span>
      <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
      <p className={css.name}>{item.name}</p>
    </li>
  ))}
  </ul>
};


FriendList.propTypes = {
  friends: PropTypes.array
};