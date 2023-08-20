import React, { useEffect, useState } from 'react';
import getStats from '../apis/stat';
import { PlayerStat } from '../types/stat';
import '../style/statPage.scss';

export default function StatPage() {
  const [playerStats, setPlayerStats] = useState<PlayerStat[]>([]);

  const statSpec = [
    { name: 'RANK', key: 'rank' },
    { name: 'NAME', key: 'name' },
    { name: 'GAMES', key: 'games' },
    { name: 'POINTS', key: 'points' },
    { name: 'ASSIST', key: 'assist' },
    { name: 'REBOUND', key: 'rebound' },
    { name: 'BLOCK', key: 'block' },
    { name: 'STEAL', key: 'steal' },
    { name: 'FG%', key: 'fgRate' },
    { name: 'FG', key: 'fgNum' },
    { name: '3PT%', key: 'pt3Rate' },
    { name: '3PT', key: 'pt3Num' },
    { name: 'FT%', key: 'ftRate' },
    { name: 'FT', key: 'ftNum' },
  ];

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
      <div className="stats-wrap">
        {statSpec.map(stat => (
          <div className="column">
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
