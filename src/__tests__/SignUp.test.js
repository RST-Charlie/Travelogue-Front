import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";

describe("SignUp", () => {
    it("renders the SignUp component", () => {
        render(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>
        );
        expect(screen.getByTestId("signup-component")).toBeInTheDocument();
    });

    it("renders the form inputs", () => {
        render(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>
        );
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    });

    it("submits the form", () => {
        render(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>
        );
        fireEvent.submit(screen.getByRole("button", { name: "Submit" }));
    });

    it("navigates to the login page", () => {
        render(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText("Login"));
    });
});





