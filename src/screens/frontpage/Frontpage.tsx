import { useState, useEffect, useCallback } from 'react';
import SimpleGroup from '../../components/simpleGroup/SimpleGroup';
import './Frontpage.scss';
import logo from './qatar-logo-white.svg';
import groups from './groups';

const Frontpage = () => {
  const kickOffTimestamp = 1669197600;

  const updateDate = useCallback(() => {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    const timestampToKickOff = kickOffTimestamp - currentTimestamp;

    const days = Math.floor(timestampToKickOff / 86400).toString();
    const hours = Math.floor((timestampToKickOff / 3600) % 24)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((timestampToKickOff / 60) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timestampToKickOff % 60).toString().padStart(2, '0');

    setDateToKickOff(`${days}:${hours}:${minutes}:${seconds}`);
    setTimeout(updateDate, 1000);
  }, []);

  const [dateToKickOff, setDateToKickOff] = useState(' ');

  useEffect(() => {
    updateDate();
    console.log(groups);
  }, [updateDate]);

  return (
    <>
      <div className="Frontpage_mainContent">
        <div>
          <img className="pulsating" src={logo} alt="Qatar 2022 logo" />
        </div>
        <span className="Frontpage_countdown">{dateToKickOff}</span>

        <div className="Frontpage_groups">
          {groups.map((group) => (
            <SimpleGroup
              key={group.name}
              name={group.name}
              teams={group.teams}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Frontpage;
