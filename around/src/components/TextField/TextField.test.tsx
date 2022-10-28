import { render } from "@testing-library/react";
import { TextField, ITextFieldProps } from "./TextField";
import userEvent from "@testing-library/user-event";

const defaultProps: ITextFieldProps = {
    type: "test",
    id: "test",
    placeholder: "test",
    onChange: (event) => {},
    value: "test",
    error: false,
    helperText: "test",
};

describe("TextField Component", () => {
    it("Component renders", () => {
        const { getByRole } = render(<TextField {...defaultProps} />);
        expect(getByRole("textbox")).toBeInTheDocument();
    });

    it("Type test text", () => {
        const { getByRole } = render(<TextField {...defaultProps} />);
        userEvent.type(getByRole("textbox"), "test");
        expect(getByRole("textbox")).toHaveValue("test");
    });

    it("Focus on component", () => {
        const { getByRole } = render(<TextField {...defaultProps} />);
        expect(getByRole("textbox")).not.toHaveFocus();
        userEvent.click(getByRole("textbox"));
        expect(getByRole("textbox")).toHaveFocus();
    });

    it("Click on component", () => {
        const { container } = render(<TextField {...defaultProps} />);
        const input = container.querySelector(".MuiInputBase-root");
        if (input) {
            userEvent.click(input);
            expect(input).toHaveClass("Mui-focused");
        }
    });

    it("Component has error", () => {
        const { container } = render(
            <TextField {...defaultProps} error={true} helperText="test" />
        );
        const input = container.querySelector(".MuiInputBase-root");
        const helperTesxt = container.querySelector(".MuiFormHelperText-root");

        if (input) {
            expect(input).toHaveClass("Mui-error");
            expect(helperTesxt).toHaveTextContent("test");
        }
    });
});
