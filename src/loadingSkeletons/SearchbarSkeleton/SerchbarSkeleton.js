import Skeleton from 'react-loading-skeleton';
import style from './SerchbarSkeleton.module.scss';

const SearchbarSkeleton = () => {
  return (
    <div className={style.serchbarSkeleton} data-testid="serchbarSkeleton">
      <Skeleton count={1} className={style.serchbarSkeleton__loader} />
    </div>
  );
};

export default SearchbarSkeleton;
