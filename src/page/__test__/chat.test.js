import React from "react";
import {
    render,
    fireEvent,
    waitForElement,
    wait
} from "@testing-library/react";
import ChatPage from "../Chat/Chat";

describe("Send Message form", () => {
    it("submits values and fires", async () => {
        const handleSubmit = jest.fn();
        const { getByText, getByTestId } = render(<ChatPage />);

        const messageInput = await waitForElement(() => getByTestId("messageInput"));

        const button = await waitForElement(() => getByText("Send"));

        fireEvent.change(messageInput, {
            target: {
                value: "hello world"
            }
        });

        fireEvent.click(button);

        wait(() => {
            expect(handleSubmit).toBeCalled();
            expect(handleSubmit.mock.calls[0][0].messageToSend).toBe("hello world");
        });
    });
});
