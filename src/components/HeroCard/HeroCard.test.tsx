import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import HeroCard from "./HeroCard";

describe("Running Test for HeroCard", () => {

  test("HeroCard is rendered", () => {
    render(<HeroCard text="test" />);
  });

  test("HeroCard is disabled", () => {
    render(<HeroCard text="test" disabled/>)
    expect(screen.getByRole('herocard',{name:"test"})).toBeDisabled();
  });

});