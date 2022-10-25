import PropTypes from 'prop-types';

export const FriendList = (props) => {
    const {friends} = props;
  return friends.map(item => (
    <li className="item" key={item.id}>
      <span className="status">{item.isOnLine}</span>
      <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
      <p className="name">{item.name}</p>
    </li>
  ));
};


FriendList.propTypes = {
  friends: PropTypes.array
};