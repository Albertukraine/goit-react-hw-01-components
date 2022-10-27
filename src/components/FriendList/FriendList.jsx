import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = props => {
  const { friends } = props;
  console.log(friends);

  return (
    <ul className={style.friendList}>
      {friends.map(item => (
        <li className={style.item} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            isonline={item.isOnline}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
