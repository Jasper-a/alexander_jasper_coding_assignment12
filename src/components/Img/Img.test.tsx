import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Img from "./Img";

describe("Running Test for Img", () => {

  test("Img is rendered", () => {
    render(<Img text="test" />);
  });

  test("Img is disabled", () => {
    render(<Img text="test" disabled/>)
    expect(screen.getByRole('img',{name:"test"})).toBeDisabled();
  });

});