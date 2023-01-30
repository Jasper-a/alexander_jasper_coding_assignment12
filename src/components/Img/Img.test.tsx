import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Img from "./Img";

describe("Running Test for Img", () => {

  test("Img is rendered", () => {
    render(<Img src="https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg" />);
  });

  test("Img is disabled", () => {
    render(<Img src="https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg" disabled/>)
    expect(screen.getByRole('img',{name:"test"})).toBeDisabled();
  });

});