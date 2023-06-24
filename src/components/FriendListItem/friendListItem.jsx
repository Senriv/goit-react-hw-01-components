import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendOnline,
  FriendOffline,
} from './friendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? (
        <FriendOnline></FriendOnline>
      ) : (
        <FriendOffline></FriendOffline>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
