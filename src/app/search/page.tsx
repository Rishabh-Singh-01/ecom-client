import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';
import styles from './page.module.css';
import { SearchBar } from '@/components/searchBar';

// :TODO(p) -- add other ui components in this page
export default function Search() {
  return (
    <div className={styles.search}>
      <PaddingBottomRoutePages backgroundColor='inherit' />
      <SearchBar />
    </div>
  );
}
