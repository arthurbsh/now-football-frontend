import SimpleGroup from '../components/simpleGroup/SimpleGroup';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'SimpleGroup',
  component: SimpleGroup,
} as ComponentMeta<typeof SimpleGroup>;

const Template: ComponentStory<typeof SimpleGroup> = (args) => (
  <SimpleGroup {...args} />
);

export const Group = Template.bind({});
Group.args = {
  name: 'A',
  teams: [
    { name: 'ENG', flag: '/england-flag.svg' },
    { name: 'IRN', flag: 'https://media.api-sports.io/flags/ir.svg' },
    { name: 'USA', flag: 'https://media.api-sports.io/flags/us.svg' },
    {
      name: 'WLS',
      flag: '/wales-flag.svg',
    },
  ],
};
