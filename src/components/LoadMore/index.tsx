//importing components
import Button from '../Forms/Button';
//props interface
interface LoadMoreProps {
  onLoadMore: () => any;
  isLastPage: boolean;
}
//load more component
const LoadMore: React.FC<LoadMoreProps> = ({
  onLoadMore = () => {},
  isLastPage,
}) => {
  return (
    <Button
      onClick={() => onLoadMore()}
      className={`${isLastPage ? 'hide' : 'btn'}`}
    >
      Load more
    </Button>
  );
};

export default LoadMore;
