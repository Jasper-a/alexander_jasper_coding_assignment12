import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import RadioButton from "./RadioButton";

describe("Running Test for RadioButton", () => {

  test("RadioButton is rendered", () => {
    render(<RadioButton text="test" />);
  });

  test("RadioButton is disabled", () => {
    render(<RadioButton text="test" disabled/>)
    expect(screen.getByRole('radiobutton',{name:"test"})).toBeDisabled();
  });

});