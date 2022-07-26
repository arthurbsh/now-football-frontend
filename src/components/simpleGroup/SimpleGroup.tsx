import './SimpleGroup.scss';

interface Props {
  name: string;
  teams: { name: string; flag: string }[];
}

const SimpleGroup = ({ name, teams }: Props) => {
  return (
    <div className="SimpleGroup">
      <div className="SimpleGroup_titleArea">
        <span className="SimpleGroup_title">{`Group ${name}`}</span>
      </div>
      <div className="SimpleGroup_teamsArea">
        <div className="SimpleGroup_team">
          <span className="SimpleGroup_teamName">{teams[0].name}</span>
          <img
            className="SimpleGroup_teamFlag"
            src={teams[0].flag}
            alt="flag"
          />
        </div>
        <div className="SimpleGroup_team">
          <span className="SimpleGroup_teamName">{teams[1].name}</span>
          <img
            className="SimpleGroup_teamFlag"
            src={teams[1].flag}
            alt="flag"
          />
        </div>
        <div className="SimpleGroup_team">
          <span className="SimpleGroup_teamName">{teams[2].name}</span>
          <img
            className="SimpleGroup_teamFlag"
            src={teams[2].flag}
            alt="flag"
          />
        </div>
        <div className="SimpleGroup_team">
          <span className="SimpleGroup_teamName">{teams[3].name}</span>
          <img
            className="SimpleGroup_teamFlag"
            src={teams[3].flag}
            alt="flag"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleGroup;
