import React from 'react';
import { Story, Meta } from '@storybook/react';

import Label from './Label';
import {LabelProps} from "./Label.types";

export default {
  title: 'Coding12/Label',
  component: Label,
  argTypes: {},
} as Meta<typeof Label>;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

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