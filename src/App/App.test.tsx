import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(
        "Catalogue of anything product or service"
    );
    expect(linkElement).toBeInTheDocument();
});
