import { render } from "@testing-library/react";
import { Login } from "./Login";

describe("Login component", () => {
    it("Component renders", () => {
        const { container } = render(<Login />);

        const h1 = container.querySelector("h1");
        const link = container.querySelector("a");
        const form = container.querySelector("form");

        expect(h1).toHaveTextContent(/Sign in/i);
        expect(link).toHaveTextContent(/Forgot password?/i);
        expect(form).toBeInTheDocument();
    });
});
