import React from 'react';
import { Story, Meta } from '@storybook/react';

import Img  from './Img';
import {ImgProps} from "./Img.types";

export default {
  title: 'Coding12/Img',
  component: Img,
  argTypes: {},
} as Meta<typeof Img>;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

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