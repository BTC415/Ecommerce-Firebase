//importing utils
import { Link } from 'react-router-dom';

const Directory: React.FC = () => {
  return (
    <section className="directory">
      <div className="men__item__container">
        <Link to="/search/mens">
          <button className="shop__button">Shop Men</button>
        </Link>
      </div>
      <div className="women__item__container">
        <Link to="/search/womens">
          <button className="shop__button">Shop Women</button>
        </Link>
      </div>
    </section>
  );
};

export default Directory;
