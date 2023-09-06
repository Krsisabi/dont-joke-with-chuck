import styles from './Card.module.scss';

function formatDate(inputDate: string) {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

interface CardProps {
  value: string;
  createdAt: string;
  id: string;
  url: string;
}

export const Card = ({ createdAt, id, value, url }: CardProps) => {
  const formattedDate = formatDate(createdAt);

  return (
    <li className={styles.card}>
      <p className={styles.value}>{value}</p>
      <div className={styles.info}>
        <span className={styles.id}>{id}</span>
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <a className={styles.link} href={url} target="_blank" rel="noreferrer" />
    </li>
  );
};
