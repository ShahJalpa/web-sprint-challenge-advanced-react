import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
test("form renders without any errors", () => {
    render (<CheckoutForm />);
})

test("form header renders", () => {
    render (<CheckoutForm />) //1. Arrange: It is rendering our component CheckoutForm

    const header = screen.queryByText(/Checkout Form/i); //2. Access: It is accessing the h2 element from form

    expect(header).toBeInTheDocument(); //3. Assert: it is expecting h2 in the document.
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />) //1. Arrange: It is rendering our component CheckoutForm

    //2. action and acess: finding all elements and taking action by typeing in to input fields
    const firstNameInput = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameInput, "Jalpa");

    const lastNameInput = screen.getByLabelText(/last name/i);
    userEvent.type(lastNameInput, "Shah");

    const addressInput = screen.getByLabelText(/address/i);
    userEvent.type(addressInput,"1234 Main St");

    const cityInput = screen.getByLabelText(/city/i);
    userEvent.type(cityInput, "Suwanee");

    const stateInput = screen.getByLabelText(/state/i);
    userEvent.type(stateInput, "GA");

    const zipcodeInput = screen.getByLabelText(/zip/i);
    userEvent.type(zipcodeInput, "30001");

    const checkoutButton = screen.getByRole("button"); //finding button
    userEvent.click(checkoutButton); //event (action) is happening

    const successMessage = screen.getByTestId("successMessage");

    //assert (expectations on the document)
    expect(firstNameInput.value).toMatch("Jalpa");
    expect(lastNameInput.value).toMatch("Shah");
    expect(addressInput.value).toMatch("1234 Main St");
    expect(cityInput.value).toMatch("Suwanee");
    expect(stateInput.value).toMatch("GA");
    expect(zipcodeInput.value).toMatch("30001");

    expect(successMessage).toBeInTheDocument();
});
