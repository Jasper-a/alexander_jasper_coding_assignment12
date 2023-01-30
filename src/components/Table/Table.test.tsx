import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';

import Table from "./Table";

describe("Running Test for Table", () => {

  test("Table is rendered", () => {
    render(<Table text="test" />);
  });

  test("Table is disabled", () => {
    render(<Table text="test" disabled/>)
    expect(screen.getByRole('table',{name:"test"})).toBeDisabled();
  });

});