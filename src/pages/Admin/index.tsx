//importing components
import Button from '../../components/Forms/Button';
//admin component
const Admin = () => {
  return (
    <div className="admin">
      <div className="call__to__actions">
        <ul>
          <li>
            <Button>Add new product</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Admin;
