import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Card from "./Card";

describe("Running Test for Card", () => {

  test("Card is rendered", () => {
    render(<Card text="test" />);
  });

  test("Card is disabled", () => {
    render(<Card text="test" disabled/>)
    expect(screen.getByRole('card',{name:"test"})).toBeDisabled();
  });

});