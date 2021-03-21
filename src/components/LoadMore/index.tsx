//importing components
import Button from '../Forms/Button';
//props interface
interface LoadMoreProps {
  onLoadMore: () => any;
}
//load more component
const LoadMore: React.FC<LoadMoreProps> = ({ onLoadMore = () => {} }) => {
  return <Button onClick={() => onLoadMore()}>Load more</Button>;
};

export default LoadMore;
