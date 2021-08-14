//importing components
import Button from '../Forms/Button';

interface LoadMoreProps {
  onLoadMore: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ onLoadMore = () => {} }) => {
  return <Button onClick={() => onLoadMore()}>Load more</Button>;
};

export default LoadMore;
