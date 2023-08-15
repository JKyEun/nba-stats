import React, { useEffect, useState } from 'react';
import getStats from '../apis/stat';
import { PlayerStat } from '../types/stat';

export default function StatPage() {
  const [playerStats, setPlayerStats] = useState<PlayerStat[]>([]);

  const setStats = async () => {
    const stat = await getStats();
    setPlayerStats(stat);
  };

  useEffect(() => {
    setStats();
  }, []);

  return (
    <div>
      {playerStats.map(el => (
        <div>
          <div>{el.name}</div>
        </div>
      ))}
    </div>
  );
}
