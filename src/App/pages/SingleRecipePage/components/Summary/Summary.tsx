import React, { useMemo } from 'react';
import ReactHtmlParser from 'react-html-parser';

type SummaryProps = {
  summary: string;
};

import styles from './Summary.module.scss';

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  const parsedSummary = useMemo(() => ReactHtmlParser(summary), [summary]);

  return <div className={styles['summary']}>{parsedSummary}</div>;
};

export default Summary;
