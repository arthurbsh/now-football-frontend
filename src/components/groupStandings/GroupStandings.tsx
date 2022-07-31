import './GroupStandings.scss';

type Line = any;

type StandingLineProps = {
  line: Line;
};

type Props = {
  standings: Array<Line>;
};

const StandingsLine = ({ line }: StandingLineProps) => {
  return (
    <tr>
      <td className={'td-rank ' + (line.rank <= 2 ? 'green' : 'red')} />
      <td></td>
      <td className="td-flag">
        <img
          className="flag"
          src={'/england-flag.svg'}
          alt={line.team.name + ' flag'}
        />
      </td>
      <td className="col-team-name">{line.team.name}</td>
      <td>{line.all.played}</td>
      <td>{`${line.all.win}-${line.all.draw}-${line.all.lose}`}</td>
      <td>{line.goalsDiff}</td>
      <td>{line.points}</td>
    </tr>
  );
};

const GroupStandings = ({ standings }: Props) => {
  return (
    <div className="GroupStandings">
      <table>
        <tbody>
          <tr className="headers-row">
            <th colSpan={4}>Teams</th>
            <th>MP</th>
            <th>W-D-L</th>
            <th>+/-</th>
            <th>Points</th>
          </tr>
          {standings.map((line) => (
            <StandingsLine line={line} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupStandings;
