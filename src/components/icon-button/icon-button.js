import { css } from 'lit';
import { LionButton } from '@lion/button';
import { baseStyle } from '../../baseStyle'

export class IverIconButton extends LionButton {
  constructor() {
    super();
    this.variant = '';
  }

  static properties = {
    variant: { type: String },
    icon: { type: String }
  }

  static styles = [
    ...super.styles,
    baseStyle,
    css`
          :host{
            font-family: 'Material Icons Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            -moz-osx-font-smoothing: grayscale;
            font-feature-settings: 'liga';
            border-radius: var(--border-radius-small);
            cursor: pointer;
            background-color: var(--color-transparent);

          }

          :host([variant=primary]), :host([variant=floating-primary]){
            background-color: var(--color-primary);
          }

          :host([variant=floating]), :host([variant=floating-primary]){
            box-shadow: var(--box-shadow-2);
            border-radius: var(--border-radius-max)
          }

          :host([variant=floating]){
            background-color: var(--color-content-background);
          }

          :host(:hover){
            filter: brightness(90%);
          }

  `];
}

window.customElements.define('iver-icon-button', IverIconButton);