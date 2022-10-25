import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { UserCard } from 'components/UserCard';
import { UserStatistics } from 'components/UserStatistics';
import { FriendList } from 'components/FriendList';
import { Transactions } from 'components/Transactions';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends';
import transactions from './data/transactions.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      likes={user.stats.likes}
      views={user.stats.views}
      followers={user.stats.followers}
    />

    <UserStatistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />
    <Transactions items={transactions} />
  </React.StrictMode>
);
