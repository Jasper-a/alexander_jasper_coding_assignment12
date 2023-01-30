import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Button from "./Button";

describe("Running Test for Button", () => {

  test("Button is rendered", () => {
    render(<Button text="test" />);
  });

  test("Button is disabled", () => {
    render(<Button text="test" disabled/>)
    expect(screen.getByRole('button',{name:"test"})).toBeDisabled();
  });

});