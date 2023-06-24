import user from '../../database/user';
import data from '../../database/data';
import friends from '../../database/friends';
import transactions from '../../database/transactions';
import { Profile } from '../Profile/profile';
import { Statistics } from '../Statistics/statistics';
import { FriendList } from '../FriendList/friendList';
import { TransactionHistory } from '../TransactionHistory/transactionHistory';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
