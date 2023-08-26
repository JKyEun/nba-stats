import React, { useEffect, useState } from 'react';
import getStats from '../apis/stat';
import { PlayerStat } from '../types/stat';
import statSpec from '../constants/stat';
import '../style/statPage.scss';

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
      <div className="stats-wrap">
        {statSpec.map(stat => (
          <div className={stat.name === 'NAME' ? 'column name' : 'column'}>
            <div className="stat-name">{stat.name}</div>
            {playerStats.map(player => (
              <div className="each-player">{player[stat.key as keyof PlayerStat]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
