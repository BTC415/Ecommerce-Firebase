//importing types & img
import { CurrentUser } from '../../state';
import userIMG from './../../assets/images/user.png';
//props interface
interface UserProfileProps {
  currentUser: CurrentUser;
}
const UserProfile: React.FC<UserProfileProps> = ({ currentUser }) => {
  //user name
  const { displayName } = currentUser;
  return (
    <div className="user__profile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} alt="user-avatar" />
          </div>
        </li>
        <li>
          <span className="display__name">{displayName && displayName}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
