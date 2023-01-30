import React from 'react';
import { Story, Meta } from '@storybook/react';

import HeroCard  from './HeroCard';
import {HeroCardProps} from "./HeroCard.types";

export default {
  title: 'Coding12/HeroCard',
  component: HeroCard,
  argTypes: {},
} as Meta<typeof HeroCard>;

const Template: Story<HeroCardProps> = (args) => <HeroCard {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  backgroundColor: "#777799",
  disabled: false,
  text: 'Enabled',
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: "#777799",
  disabled: true,
  text: 'Disabled',
};