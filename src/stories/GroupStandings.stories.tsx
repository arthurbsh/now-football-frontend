import GroupStandings from '../components/groupStandings/GroupStandings';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'GroupStandings',
  component: GroupStandings,
} as ComponentMeta<typeof GroupStandings>;

const Template: ComponentStory<typeof GroupStandings> = (args) => (
  <GroupStandings {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  standings: [
    {
      rank: 1,
      team: {
        id: 15,
        name: 'Switzerland',
        logo: 'https://media.api-sports.io/football/teams/15.png',
      },
      points: 0,
      goalsDiff: 0,
      group: 'Group G',
      form: null,
      status: 'same',
      description: 'Promotion - World Cup (Play Offs)',
      all: {
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        goals: {
          for: 0,
          against: 0,
        },
      },
      home: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      away: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      update: '2022-06-28T00:00:00+00:00',
    },
    {
      rank: 2,
      team: {
        id: 14,
        name: 'Serbia',
        logo: 'https://media.api-sports.io/football/teams/14.png',
      },
      points: 0,
      goalsDiff: 0,
      group: 'Group G',
      form: null,
      status: 'same',
      description: 'Promotion - World Cup (Play Offs)',
      all: {
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        goals: {
          for: 0,
          against: 0,
        },
      },
      home: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      away: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      update: '2022-06-28T00:00:00+00:00',
    },
    {
      rank: 3,
      team: {
        id: 6,
        name: 'Brazil',
        logo: 'https://media.api-sports.io/football/teams/6.png',
      },
      points: 0,
      goalsDiff: 0,
      group: 'Group G',
      form: null,
      status: 'same',
      description: null,
      all: {
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        goals: {
          for: 0,
          against: 0,
        },
      },
      home: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      away: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      update: '2022-06-28T00:00:00+00:00',
    },
    {
      rank: 4,
      team: {
        id: 1530,
        name: 'Cameroon',
        logo: 'https://media.api-sports.io/football/teams/1530.png',
      },
      points: 0,
      goalsDiff: 0,
      group: 'Group G',
      form: null,
      status: 'same',
      description: null,
      all: {
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        goals: {
          for: 0,
          against: 0,
        },
      },
      home: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      away: {
        played: null,
        win: null,
        draw: null,
        lose: null,
        goals: {
          for: null,
          against: null,
        },
      },
      update: '2022-06-28T00:00:00+00:00',
    },
  ],
};
