import { render } from "@testing-library/react";
import { ICheckbox } from "../../Interfaces/ICheckbox";
import { Checkbox } from "./Checkbox";

const defaultProps: ICheckbox = {
    id: "test",
    change(event) {},
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
