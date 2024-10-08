customElements.define(
    "js-includes",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
  
        const items = ["apple", "banana", "grape"];
        const hasBanana = items.includes("banana") ? "Yes" : "No";
  
        this.shadowRoot.innerHTML = `
          <div class="box">
            <h2 class="subtitle">Does the list include 'banana'?:</h2>
            <p>${hasBanana}</p>
          </div>
        `;
      }
    }
  );
  