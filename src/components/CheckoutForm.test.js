import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />) //1. Arrange: It is rendering our component CheckoutForm

    const header = screen.queryByText(/Checkout Form/i); //2. Access: It is accessing the h2 element from form

    expect(header).toBeInTheDocument(); //3. Assert: it is expecting h2 in the document.
});

test("form shows success message on submit with form details", () => {});
