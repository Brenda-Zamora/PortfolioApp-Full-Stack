import { vi } from "vitest";
global.alert = vi.fn(); // Mock alert for testing
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signin from "./SignIn";
import "@testing-library/jest-dom";

// Mock navigate function from react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});

test("submits form and calls fetch with correct data", async () => {
  // Mock global fetch
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          token: "fake-token",
          user: { role: "user" },
        }),
    })
  );

  render(
    <MemoryRouter>
      <Signin />
    </MemoryRouter>
  );

  const emailInput = screen.getByPlaceholderText("Email Address");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByRole("button", { name: "Sign In" });

  fireEvent.change(emailInput, { target: { value: "test@email.com" } });
  fireEvent.change(passwordInput, { target: { value: "123456" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:3000/auth/signin",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "test@email.com",
          password: "123456",
        }),
      })
    );
  });
});
