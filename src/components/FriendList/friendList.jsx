import PropTypes from 'prop-types';
import { FriendListContainer, FriendItem,  FriendOnline, FriendOffline } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            {friend.isOnline ? (
              <FriendOnline></FriendOnline>
            ) : (
              <FriendOffline></FriendOffline>
            )}
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </FriendItem>
        );
      })}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
