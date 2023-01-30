import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card  from './Card';
import {CardProps} from "./Card.types";

export default {
  title: 'Coding12/Card',
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

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