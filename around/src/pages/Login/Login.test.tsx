import { render } from "@testing-library/react";
import { Login } from "./Login";

describe("Login component", () => {
    it("Component renders", () => {
        const { container } = render(<Login />);

        expect(container).toBeInTheDocument();
    });
});
