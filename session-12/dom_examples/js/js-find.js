customElements.define(
    "js-find",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const users = [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Charlie" },
        ];
        const foundUser = users.find((user) => user.id === 2);
  
        this.shadowRoot.innerHTML = `
          <div class="box">
            <h2 class="subtitle">Found user with ID 2:</h2>
            <p>${foundUser ? foundUser.name : "User not found"}</p>
          </div>
        `;
      }
    }
  );
  