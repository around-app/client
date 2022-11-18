import { Wrapper } from "./Wrapper";
import { render } from "@testing-library/react";

describe("Wrapper Component", () => {
    it("Conmonent renders", () => {
        const testText = "test";
        const testComponent = (
            <div>
                <p>{testText}</p>
            </div>
        );
        const { getByText } = render(<Wrapper children={testComponent} />);
        expect(getByText(testText)).toBeInTheDocument();
    });
});
