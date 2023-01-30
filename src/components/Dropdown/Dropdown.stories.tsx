import React from 'react';
import { Story, Meta } from '@storybook/react';

import Dropdown  from './Dropdown';
import {DropdownProps} from "./Dropdown.types";

export default {
  title: 'Coding12/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

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