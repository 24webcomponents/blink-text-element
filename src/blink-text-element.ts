class BlinkTextElement extends HTMLElement {
  #renderRoot = this.attachShadow({mode: 'open'})

  connectedCallback(): void {
    this.#renderRoot.innerHTML = `
    <style>
      :host {
        animation: 1s linear blink infinite;
      }
      @keyframes blink {
        from {
          opacity: 0
        }
        to {
          opacity: 1
        }
      }
    </style>
    <slot></slot>
    `
  }
}

declare global {
  interface Window {
    BlinkTextElement: typeof BlinkTextElement
  }
}

export default BlinkTextElement

if (!window.customElements.get('blink-text')) {
  window.BlinkTextElement = BlinkTextElement
  window.customElements.define('blink-text', BlinkTextElement)
}
