import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button  from './Button';
import {ButtonProps} from "./Button.types";

export default {
  title: 'Coding12/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

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