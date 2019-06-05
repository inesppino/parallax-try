import { LitElement, html, css } from 'lit-element';

export class MyElement extends LitElement {
    static get styles() {
        return [
            css`
            :host {
            }

            .img-cont {
                
            }
            `,
        ];
    }

    static get properties(){
    return {

    };
    }
  
    constructor() {
    super();
    }

  render() {
    return html`
      <p>Soy My Element</p>
      <div class="img-cont">sdfjkhdskjfhsdjkfhdskfh</div>
    `;
  }
}

customElements.define('my-element', MyElement);