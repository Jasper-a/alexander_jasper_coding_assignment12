import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Text from "./Text";

describe("Running Test for Text", () => {

  test("Text is rendered", () => {
    render(<Text text="test" />);
  });

  test("Text is disabled", () => {
    render(<Text text="test" disabled/>)
    expect(screen.getByRole('text',{name:"test"})).toBeDisabled();
  });

});