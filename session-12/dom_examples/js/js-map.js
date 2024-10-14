customElements.define(
    "js-map",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
  
        const numbers = [1, 2, 3, 4];
        const doubled = numbers.map((num) => num * 2);
  
        this.shadowRoot.innerHTML = `
          <div class="box">
            <h2 class="subtitle">Mapped numbers (doubled):</h2>
            <ul>
              ${doubled.map((num) => `<li>${num}</li>`).join("")}
            </ul>
          </div>
        `;
      }
    }
  );
  