//importing types & img
import { CurrentUser } from '../../interfaces';
import userIMG from './../../assets/images/user.png';
//props interface
interface UserProfileProps {
  currentUser: CurrentUser | null;
}
const UserProfile: React.FC<UserProfileProps> = ({ currentUser }) => {
  if (currentUser) {
    //user name
    const { displayName } = currentUser;
    return (
      <div className="user__profile">
        <ul>
          <li>
            <div className="img__container">
              <img src={userIMG} alt="user-avatar" />
            </div>
          </li>
          <li>
            <span className="display__name">{displayName && displayName}</span>
          </li>
        </ul>
      </div>
    );
  }
  return null;
};

export default UserProfile;
