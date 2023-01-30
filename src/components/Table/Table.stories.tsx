import React from 'react';
import { Story, Meta } from '@storybook/react';

import Table  from './Table';
import {TableProps} from "./Table.types";

export default {
  title: 'Coding12/Table',
  component: Table,
  argTypes: {},
} as Meta<typeof Table>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  backgroundColor: "#9999AA",
  disabled: false,
  text: 'Enabled',
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: "#9999AA",
  disabled: true,
  text: 'Disabled',
};