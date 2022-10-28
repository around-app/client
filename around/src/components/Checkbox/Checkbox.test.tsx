import { render } from "@testing-library/react";
import { Checkbox, ICheckboxProps } from "./Checkbox";

const defaultProps: ICheckboxProps = {
    id: "test",
    onChange(event) {},
    checked: false,
};

describe("Component renders", () => {
    it("Component renders", () => {
        const { getByRole } = render(<Checkbox {...defaultProps} />);
        expect(getByRole("checkbox")).toBeInTheDocument();
    });

    it("Component checked", () => {
        const { getByRole } = render(
            <Checkbox {...defaultProps} checked={true} />
        );
        expect(getByRole("checkbox")).toBeChecked();
    });

    it("Component not checked", () => {
        const { getByRole } = render(<Checkbox {...defaultProps} />);
        expect(getByRole("checkbox")).not.toBeChecked();
    });
});
