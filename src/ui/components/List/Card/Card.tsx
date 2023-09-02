import styles from './Card.module.scss';

interface CardProps {
  value: string;
  createdAt: string;
  id: string;
  url: string;
}

export const Card = ({ createdAt, id, value, url }: CardProps) => (
  <li className={styles.card}>
    <p className={styles.value}>{value}</p>
    <div className={styles.info}>
      <span className={styles.id}>{id}</span>
      <span className={styles.date}>{createdAt}</span>
    </div>
    <a className={styles.link} href={url} target="_blank" rel="noreferrer" />
  </li>
);
