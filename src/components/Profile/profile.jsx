import PropTypes from 'prop-types';
import {ProfileContainer, ProfileName} from './profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <ProfileName className="name">{username}</ProfileName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
