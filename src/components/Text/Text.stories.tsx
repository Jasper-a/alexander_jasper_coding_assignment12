import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text  from './Text';
import {TextProps} from "./Text.types";

export default {
  title: 'Coding12/Text',
  component: Text,
  argTypes: {},
} as Meta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args} />;

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