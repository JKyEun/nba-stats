import React, { useEffect, useState } from 'react';
import getStats from '../apis/stat';
import { PlayerStat } from '../types/stat';
import '../style/statPage.scss';

export default function StatPage() {
  const [playerStats, setPlayerStats] = useState<PlayerStat[]>([]);

  const setStats = async () => {
    const stat = await getStats();
    setPlayerStats(stat);
    console.log(stat);
  };

  useEffect(() => {
    setStats();
  }, []);

  return (
    <div>
      {playerStats.map(el => (
        <div className="stats-wrap">
          <div className="column">
            <div>RANK</div>
            <div>{el.rank}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
