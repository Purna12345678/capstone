import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders learn react link", () => {
    render(_jsx(App, {}));
    const linkElement = screen.getByText(/todos/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.js.map