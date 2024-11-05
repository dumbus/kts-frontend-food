import React from 'react';
import ReactHtmlParser from 'react-html-parser';

type SummaryProps = {
  summary: string;
};

import styles from './Summary.module.scss';

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return <div className={styles['summary']}>{ReactHtmlParser(summary)}</div>;
};

export default Summary;
