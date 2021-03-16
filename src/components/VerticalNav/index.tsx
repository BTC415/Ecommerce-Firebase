//importing hooks
import { useTypedSelector } from '../../hooks';
//importing components
import UserProfile from './../UserProfile';
//vertical nav component
const VerticalNav: React.FC = ({ children }) => {
  //redux state
  const { currentUser } = useTypedSelector(state => state.user);
  //user config
  const userProfileConfig = {
    currentUser: currentUser!,
  };
  return (
    <div className="vertical__nav">
      <UserProfile {...userProfileConfig} />
      <div className="menu">{children}</div>
    </div>
  );
};

export default VerticalNav;
