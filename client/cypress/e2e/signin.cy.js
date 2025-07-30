describe("Sign In Page", () => {
  it("should allow user to sign in with correct credentials", () => {
    cy.visit("http://localhost:5173/signin");

    cy.get('input[name="email"]').type("test@email.com");
    cy.get('input[name="password"]').type("123456");

    cy.get("button").contains("Sign In").click();

    cy.url().should("include", "/"); // redirige al home
  });
});
