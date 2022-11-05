import { render } from "@testing-library/react";
import { Navigation } from "./Navigation";

describe("Navigation component", () => {
    it("Component renders", () => {
        const { container } = render(<Navigation />);
        expect(container).toBeInTheDocument();
    });
});
