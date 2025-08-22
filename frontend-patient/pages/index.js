import React from 'react';
import DailyRoutine from '../components/DailyRoutine';
import MemorySection from '../components/MemorySection';
import HealthCheckIn from '../components/HealthCheckIn';

export default function Home() {
  return (
    <div>
      <h1>Welcome, Patient</h1>
      <DailyRoutine />
      <MemorySection />
      <HealthCheckIn />
    </div>
  );
}
