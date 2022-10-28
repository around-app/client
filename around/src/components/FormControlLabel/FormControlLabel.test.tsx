import { render } from "@testing-library/react";
import { IFormControlLabelProps } from "../../Interfaces/IFormControlLabelProps";
import { FormControlLabel } from "./FormControlLabel";

const defaultProps: IFormControlLabelProps = {
    label: "test",
    id: "test",
    checked: false,
    change() {},
};

describe("Component FormControlLabel", () => {
    it("Component renders", () => {
        const { getByLabelText } = render(
            <FormControlLabel {...defaultProps} />
        );
        expect(getByLabelText("test")).toBeInTheDocument();
    });
});
