import React from 'react';
import TodaySnapshot from '../components/TodaySnapshot';
import MemoriesArchive from '../components/MemoriesArchive';
import AlertsTab from '../components/AlertsTab';
import MessageBox from '../components/MessageBox';

export default function Dashboard() {
  return (
    <div>
      <h1>Family/Doctor Dashboard</h1>
      <TodaySnapshot />
      <MemoriesArchive />
      <AlertsTab />
      <MessageBox />
    </div>
  );
}
