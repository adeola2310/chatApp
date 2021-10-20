import { render } from "@testing-library/react"
import MessageCard from "../MessageCard/MessageCard";

test("Message card renders correctly", () => {
    const { getByText } = render(
        <MessageCard author="adeola" message="hello world" date="21 Oct 2021" />
    );
    expect(getByText("adeola")).toBeInTheDocument();
    expect(getByText("hello world")).toBeInTheDocument();
    expect(getByText("21 0ct 2021")).toBeInTheDocument();
});
