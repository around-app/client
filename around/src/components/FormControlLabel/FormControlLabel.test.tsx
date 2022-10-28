import { render } from "@testing-library/react";
import { FormControlLabel, IFormControlLabelProps } from "./FormControlLabel";

const defaultProps: IFormControlLabelProps = {
    label: "test",
    id: "test",
    checked: false,
    onChange() {},
};

describe("Component FormControlLabel", () => {
    it("Component renders", () => {
        const { getByLabelText } = render(
            <FormControlLabel {...defaultProps} />
        );
        expect(getByLabelText("test")).toBeInTheDocument();
    });
});
