import React from 'react';

import Text from 'components/Text';

import styles from './Labels.module.scss';

interface LabelsProps {
  labelsData: string[];
}

const Labels: React.FC<LabelsProps> = ({ labelsData }) => {
  const labels = labelsData.map((labelText, idx) => {
    return (
      <div className={styles['labels__item']} key={idx}>
        <Text color="accent">{labelText}</Text>
      </div>
    );
  });

  return <div className={styles['labels']}>{labels}</div>;
};

export default Labels;
