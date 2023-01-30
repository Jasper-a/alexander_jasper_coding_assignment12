import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Dropdown from "./Dropdown";

describe("Running Test for Dropdown", () => {

  test("Dropdown is rendered", () => {
    render(<Dropdown text="test" />);
  });

  test("Dropdown is disabled", () => {
    render(<Dropdown text="test" disabled/>)
    expect(screen.getByRole('dropdown',{name:"test"})).toBeDisabled();
  });

});