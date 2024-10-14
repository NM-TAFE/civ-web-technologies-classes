customElements.define(
    "js-filter",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
  
        const people = ["Alice", "Bob", "Charlie", "David"];
        const filteredPeople = people.filter((person) =>
          person.includes("a")
        );
  
        this.shadowRoot.innerHTML = `
          <div class="box">
            <h2 class="subtitle">Filtered people (includes 'a'):</h2>
            <ul>
              ${filteredPeople.map((person) => `<li>${person}</li>`).join("")}
            </ul>
          </div>
        `;
      }
    }
  );
  