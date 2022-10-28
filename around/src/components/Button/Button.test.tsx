import { render } from "@testing-library/react";
import { IButtonProps } from "../../Interfaces/IButtonProps";
import { Button } from "./Button";

const defaultProps: IButtonProps = {
    id: "test",
    text: "test",
    type: "button",
};

describe("Button component", () => {
    it("Component renders", () => {
        const { getByRole } = render(<Button {...defaultProps} />);

        expect(getByRole("button")).toBeInTheDocument();
    });

    it("Component has types", () => {
        const { getAllByRole } = render(
            <>
                <Button {...defaultProps} />
                <Button {...defaultProps} type="submit" />
                <Button {...defaultProps} type="reset" />
                <Button {...defaultProps} text="test" />
            </>
        );

        const [button, submit, reset] = getAllByRole("button");

        expect(button).toHaveAttribute("type", "button");
        expect(submit).toHaveAttribute("type", "submit");
        expect(reset).toHaveAttribute("type", "reset");
    });

    it("Component has text", () => {
        const { getByText } = render(<Button {...defaultProps} text="test" />);

        expect(getByText("test")).toHaveTextContent(/test/i);
    });
});
