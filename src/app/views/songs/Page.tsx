import React, { FC } from 'react';
import styles from './styles.module.scss';

interface PageProps {}

const Page: FC<PageProps> = props => {
  return <div className={styles.main}>Songs</div>;
};

export default Page;
