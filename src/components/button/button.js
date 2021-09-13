import {html, css, LitElement} from 'lit';
import  './button.base';
import {baseStyle} from '../../baseStyle'
// import '@lion/button/define'

/**
 * An implementation of the egg button.
 *
 *
 * @attr {Boolean} disabled - Disabled attribute
 * @attr {'primary' | 'secondary' | 'tertiary'} kind - It set an predefined appearance of the button
 *
 * @cssprop {color} [--egg-primary] Background color for 'color=primary' button
 * @cssprop {color} [--egg-primary-active] Active background color for 'color=primary' button
 * @cssprop {color} [--egg-primary-hover] Hover background color for 'color=primary' button
 * @cssprop {color} [--egg-surface] Background when disabled
 * @cssprop {color} [--egg-on-primary] Text color for 'color=primary' button
 * @cssprop {color} [--egg-on-surface] Default text color
 * @cssprop {length} [--egg-disabled-opacity] Disabled opacity
 * @cssprop {color} [--egg-divider] Color of the divider
 * @cssprop {color} [--egg-surface-active] Active surface color
 * @cssprop {color} [--egg-surface-hover] Hover surface color
 * @cssprop {color} [--egg-button-background=transparent] Customizable background color
 * @cssprop {color} [--egg-button-color=--egg-on-surface] Customizable color
 *
 * @slot - Default slot, content of the button
 *
 * @fires click - Dispatched when the button is clicked
 *
 * @extends LionButton
 */


 export class IverButton extends LitElement {
    
    static get properties() {
      return {
        text: {type: String},
      }
    }
  
    constructor() {
      super();
      this.text = '';
    }
  
    render() {
      return html`<iver-button-base>${this.text}</iver-button-base>`;
    }
  
    connectedCallback() {
      super.connectedCallback();
      
    }
  
    disconnectedCallback() { 
 
      super.disconnectedCallback();
    }
  
    
  }

window.customElements.define('iver-button', IverButton);



  



// export class IverButton extends LionButton {
//   static get styles() {
//     return [
//       super.styles,
//       baseStyle,
//       css`
//         :host {
//           font-style: normal;
//           font-weight: normal;
//           font-size: 14px;
//           line-height: 20px;
//           height: var(--egg-size-regular, 40px);
//           background: var(----color-primary, transparent);
//           color: var(--egg-button-color, var(--egg-on-surface, #000000de));
//           user-select: none;
//           align-content: center;
//           justify-content: center;
//           padding: 0;
//         }
//         :host .button-content {
//           padding-left: 24px;
//           padding-right: 24px;
//         }
//         :host,
//         :host::before {
//           border-radius: 3px;
//           box-sizing: border-box;
//           cursor: pointer;
//         }
//         :host::before {
//           border: 1px solid var(--egg-divider, #00000029);
//           top: 0;
//           bottom: 0;
//           transform: unset;
//           left: 0;
//           right: 0;
//         }
//         :host .button-content {
//           z-index: 0;
//         }
//         :host(:hover)::before {
//           background: var(--egg-surface-hover, #00000014);
//         }
//         :host(:active),
//         :host([active]),
//         :host(:hover) {
//           background: transparent;
//         }
//         :host(:active)::before,
//         :host([active])::before {
//           background: var(--egg-surface-active, #000000de);
//         }
//         :host([disabled]) {
//           opacity: var(--egg-disabled-opacity, 0.4);
//         }
//         :host([kind='primary']) {
//           color: var(--egg-on-primary, #fff);
//         }
//         :host([kind='primary'])::before {
//           background: var(--egg-primary, #1976d2);
//         }
//         :host(:hover[kind='primary'])::before {
//           background: var(--egg-primary-hover, #135699);
//         }
//         :host(:active[kind='primary'])::before,
//         :host([active][kind='primary'])::before {
//           background: var(--egg-primary-active, fff);
//         }
//       `
//     ]
//   }
// }