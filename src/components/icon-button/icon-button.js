import {html, css, unsafeCSS} from 'lit';
import { LionButton } from '@lion/button';
import {baseStyle} from '../../baseStyle'

 export class IverIconButton extends LionButton {
    constructor() {
      super();
      this.variant = ''
    }

    static properties = {
        variant: {type: String},
        icon: {type: String}
    }

    static  styles =  [
        ...super.styles,
        baseStyle,
        css`
          :host{
            font-family: 'Material Icons Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;  /* Preferred icon size */
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;

            /* Support for all WebKit browsers. */
            -webkit-font-smoothing: antialiased;
            /* Support for Safari and Chrome. */
            text-rendering: optimizeLegibility;

            /* Support for Firefox. */
            -moz-osx-font-smoothing: grayscale;

            /* Support for IE. */
            font-feature-settings: 'liga';

            border-radius: var(--border-radius-small);
            cursor: pointer;
            background-color: var(--color-transparent);

          }

          :host(.primary), :host(.floating-primary){
            background-color: var(--color-primary);
          }

          :host(.floating), :host(.floating-primary){
            box-shadow: var(--box-shadow-2);
            border-radius: var(--border-radius-max)
          }

          :host(.floating){
            background-color: var(--color-content-background);
          }

          :host(:hover){
            filter: brightness(90%);
          }

          `];

render() {
  this.classList.add(this.variant);
  return super.render();
}



   
  }

window.customElements.define('iver-icon-button', IverIconButton);