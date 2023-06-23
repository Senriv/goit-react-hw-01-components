import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <li key={friend.id} className="item">
          <span className="status"></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>;
      })}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
  };
