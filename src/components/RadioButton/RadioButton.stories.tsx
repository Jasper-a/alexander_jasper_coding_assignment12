import React from 'react';
import { Story, Meta } from '@storybook/react';

import RadioButton  from './RadioButton';
import {RadioButtonProps} from "./RadioButton.types";

export default {
  title: 'Coding12/RadioButton',
  component: RadioButton,
  argTypes: {},
} as Meta<typeof RadioButton>;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

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