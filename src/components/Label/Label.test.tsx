import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Label from "./Label";

describe("Running Test for Label", () => {

  test("Label is rendered", () => {
    render(<Label text="test" />);
  });

  test("Label is disabled", () => {
    render(<Label text="test" disabled/>)
    expect(screen.getByRole('label',{name:"test"})).toBeDisabled();
  });

});