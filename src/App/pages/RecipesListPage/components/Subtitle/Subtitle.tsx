import Text from 'components/Text';

import styles from './Subtitle.module.scss';

const Subtitle = () => {
  return (
    <Text className={styles['subtitle']} tag="h2" weight="normal" view="p-20">
      Find the perfect food and <u>drink ideas</u> for every occasion, from <u>weeknight dinners</u> to{' '}
      <u>holiday feasts</u>.
    </Text>
  );
};

export default Subtitle;
