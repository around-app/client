import { render, screen } from "@testing-library/react";
import App from "./App";

test("Component renders", () => {
    render(<App />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
});
