import { Card } from './Card';
import styles from './List.module.scss';

const data = [
  {
    value:
      'Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.',
    id: 'hxdulftcswqglp1-qe3nfw',
    createdAt: '01.05.2020',
  },
  {
    value:
      'The single most successful anti-smoking measure was a commercial in the 1980\'s. In the commercial, there is a man smoking a cigarette. A voice then exclaims "Smoking will kill you." Nothing happens, until Chuck Norris blasts through the wall and kills the man with a single round house kick.',
    id: 'Xs8klqJHQG-p6DnKb_2Oaw',
    createdAt: '12.06.2020',
  },
  {
    value:
      "Big Foot claims he has a couple pictures of Chuck Norris... All his friends think he's full of crap.",
    id: 'FsPabIKKRRKluFmQT-RpXQ',
    createdAt: '15.11.2021',
  },
  {
    value:
      'Chuck Norris claims the greatest comedy ever is "Saving Private Ryan"',
    id: 'sSTcTXdsSAq_8duAaiEYbw',
    createdAt: '16.11.2021',
  },
  {
    value:
      'Chuck Norris has won the fifa world cup 5 times with his game face alone.',
    id: 'bIaVYwbDQ_eS5gy2K1m28w',
    createdAt: '18.12.2021',
  },
  {
    value:
      'There once was a Chuck Norris toilet paper brand, but it would not take shit from anyone.',
    id: 'BCP_II1FQeaj6dSw5m0uog',
    createdAt: '18.12.2021',
  },
  {
    value: 'Chuck Norris invented manure spreaders.',
    id: 'id4dTcDiRneK4btgOGpNNw',
    createdAt: '18.12.2021',
  },
  {
    value:
      'Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.',
    id: 'nndn3pkxqdayq1q3vzm1fw',
    createdAt: '19.12.2021',
  },
];

export const List = () => (
  <ul className={styles.list}>
    {data.map((el) => (
      <Card key={el.id} {...el} />
    ))}
  </ul>
);
