customElements.define(
    "js-sort",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
  
        const names = ["Charlie", "Bob", "Alice", "David"];
        const sortedNames = names.sort();
  
        this.shadowRoot.innerHTML = `
          <div class="box">
            <h2 class="subtitle">Sorted names:</h2>
            <ul>
              ${sortedNames.map((name) => `<li>${name}</li>`).join("")}
            </ul>
          </div>
        `;
      }
    }
  );
  