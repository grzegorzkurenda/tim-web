import { screen, render } from "@testing-library/react";
import React from "react";
import CarList from "../components/carlist";

test("renderCarList", async () => {
    const carList = render(<CarList />)
    expect(screen.getByText(/Model/i)).toBeInTheDocument();
    expect(screen.getByText(/Make/i)).toBeInTheDocument();
    expect(screen.getByText(/HorsePower/i)).toBeInTheDocument();
    expect(screen.getByText(/EngineSize/i)).toBeInTheDocument();
})