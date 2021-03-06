//importing styles
import '../../styles/css/default.css';
//importing components
import Header from '../Header';
//app component
const App = () => {
  return (
    <div className="app__container">
      <Header />
      <div className="wrapper"></div>
    </div>
  );
};

export default App;
