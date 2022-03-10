// import PropTypes, {InferProps} from 'prop-types'
import { FC } from 'react';

interface CardProps {
  title: string
  description: string
  numVotes?: number
}
// props: CardProps
const Card: FC <CardProps> = (props) => {
  const { title, description, numVotes = 0, children } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {numVotes && numVotes * 4}
        {' '}
        votes
      </div>
      {children}
    </div>
  );
};

export default Card;
