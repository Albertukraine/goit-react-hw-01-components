import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { UserCard } from 'components/UserCard';
import {UserStatistics} from 'components/UserStatistics';
import { FriendList } from 'components/FriendList';
import { Transactions } from 'components/Transactions';
import user from './data/user.json';
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
    <UserStatistics />
    <FriendList />
    <Transactions />
    
  </React.StrictMode>
);

