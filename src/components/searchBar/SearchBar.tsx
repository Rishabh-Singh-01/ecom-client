'use client';
import { useRouter } from 'next/navigation';
import styles from './searchBar.module.css';
import { FormEvent, useState } from 'react';

export function SearchBar() {
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  const router = useRouter();

  const onSubmitSearchFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products?name=${searchText}`);
  };
  return (
    <form className={styles.searchForm} onSubmit={onSubmitSearchFormHandler}>
      <input
        className={styles.searchInput}
        placeholder='Search for your favourite character ...'
        value={searchText}
        onInput={(e) => setSearchText((e.target as HTMLInputElement).value)}
        autoFocus
      />
    </form>
  );
}
