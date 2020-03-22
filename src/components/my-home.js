import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyHome extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <style>
        :host{
          display: block;
          width: 100%;
          height: 100%;
          background: red;
        }
        .container{
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      </style>
      <div class="container">
        <h2>Encuentra tu ciudad de una manera Natural</h2>
        <button></button>
      </div>
      
    `;
  }
}

window.customElements.define('my-home', MyHome);
