import { getAllByRole, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

describe("LoginForm Component", () => {
    it("Component renders", () => {
        const { container } = render(<LoginForm />);

        const h1 = container.querySelector("h1");
        const link = container.querySelector("a");
        const form = container.querySelector("form");

        expect(h1).toHaveTextContent(/Sign in/i);
        expect(link).toHaveTextContent(/Forgot password?/i);
        expect(form).toBeInTheDocument();
    });
});
