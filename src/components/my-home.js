import { html, property } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyHome extends PageViewElement {
  // @property({ type: Boolean }) status = true;
  static get properties() {
    return {
      status: { type: Boolean }
    };
  }


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
          padding-top: 64px;
          min-height: 90vh;
          background: #d5dddf;
        }
        .container{
          min-width: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        /* button{
          width: 150px;
          height: 40px;
          text-decoration: none;
          border-radius: 20px;
          background: #0077ff;
          color: #00ceff;
          border-style: none;
        } */
      </style>
      <div class="container">
        ${this.status==true
        ?html`
          <h2 style="color: #6b8e4e">Encuentra tu ciudad de una manera Natural</h2>
          <button type="button" class="btn btn-dark" @click=${this.nextHome}>Empieza ahora</button>
        `
        :html`
        <div clas='data'>
          <h1>Ingresa tus datos</h1>
        </div>
        `}
      </div>
    `;
  }

  firstUpdated(){
    this.status = true;
  }

  nextHome(){
    this.status = false;
    }
}

window.customElements.define('my-home', MyHome);
