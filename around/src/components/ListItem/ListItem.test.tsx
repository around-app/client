import { render } from "@testing-library/react";
import { ListItem } from "./ListItem";

describe("Component ListItem", () => {
    it("Component renders", () => {
        const { getByRole } = render(<ListItem typeIcon="chat" text="chat" />);
        expect(getByRole("button")).toBeInTheDocument();
        expect(getByRole("button")).toHaveTextContent("chat");
    });
});
