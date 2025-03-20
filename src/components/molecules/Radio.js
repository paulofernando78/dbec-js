class WcRadio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"})
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        input { display: none; }
        label {
          display: block;
          position: relative;
          padding-left: 30px;
          cursor: pointer;
          font-size: 22px;
        }
        label:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          border: 2px solid #000;
          border-radius: 50%;
        }
        input:checked + label:before {
          background-color: #000;
        }
      </style>
      <input type="radio" id="radio" />
      <label for="radio">
        <slot></slot>
      </label>
    `;
  }
}