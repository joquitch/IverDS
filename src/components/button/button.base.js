import {css} from 'lit';
import { LionButton } from '@lion/button';
import {baseStyle} from '../../baseStyle'

 export class IverButtonBase extends LionButton {
    static get styles() {
      return [
        ...super.styles,
        baseStyle,
        css`
          :host {
                background: var(--color-primary);
                text-transform: uppercase;
                padding: var(--spacing-3) var(--spacing-4);
                border-radius: var(--border-radius-small);
                font-family: Graphik;
                font-size: 14px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: var(--color-shade-4);
                cursor: pointer;
          }

          :host(:hover){
            filter: brightness(90%);
            background: var(--color-primary);
          }

          :host(:active){
            filter: brightness(80%);
            background: var(--color-primary);
          }
          
          `];
    }
  }

window.customElements.define('iver-button-base', IverButtonBase);