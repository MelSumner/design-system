/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import type { ComponentLike, WithBoundArgs } from '@glint/template';
import type { HdsFormFieldSignature } from '../field';
import type { HdsFormTextInputBaseSignature } from './base';
import type { HdsFormErrorSignature } from '../error';
import type { HdsFormHelperTextSignature } from '../helper-text';
import type { HdsFormLabelSignature } from '../label';
import type { HdsFormVisibilityToggleSignature } from '../visibility-toggle';
import HdsFormCharacterCountComponent from '../character-count/index.ts';

export interface HdsFormTextInputFieldSignature {
  Args: Omit<HdsFormFieldSignature['Args'], 'contextualClass' | 'layout'> &
    HdsFormTextInputBaseSignature['Args'] & {
      visibilityToggleAriaLabel?: HdsFormVisibilityToggleSignature['Args']['ariaLabel'];
      visibilityToggleAriaMessageText?: HdsFormVisibilityToggleSignature['Args']['ariaMessageText'];
    };
  Blocks: {
    default: [
      {
        Label?: ComponentLike<HdsFormLabelSignature>;
        HelperText?: ComponentLike<HdsFormHelperTextSignature>;
        Error?: ComponentLike<HdsFormErrorSignature>;
        CharacterCount?: WithBoundArgs<
          typeof HdsFormCharacterCountComponent,
          'value'
        >;
      },
    ];
  };
  Element: HdsFormFieldSignature['Element'];
}

export default class HdsFormTextInputField extends Component<HdsFormTextInputFieldSignature> {
  @tracked isPasswordMasked = true;
  @tracked type;

  constructor(owner: unknown, args: HdsFormTextInputFieldSignature['Args']) {
    super(owner, args);
    this.type = this.args.type ?? 'text';
  }

  get hasVisibilityToggle(): boolean {
    return this.args.hasVisibilityToggle ?? true;
  }

  get showVisibilityToggle(): boolean {
    return this.args.type === 'password' && this.hasVisibilityToggle;
  }

  get visibilityToggleAriaLabel(): string | undefined {
    if (this.args.visibilityToggleAriaLabel) {
      return this.args.visibilityToggleAriaLabel;
    } else if (this.isPasswordMasked) {
      return 'Show password';
    } else {
      return 'Hide password';
    }
  }

  get visibilityToggleAriaMessageText(): string | undefined {
    if (this.args.visibilityToggleAriaMessageText) {
      return this.args.visibilityToggleAriaMessageText;
    } else if (this.isPasswordMasked) {
      return 'Password is hidden';
    } else {
      return 'Password is visible';
    }
  }

  @action
  onClickTogglePasswordReadability(): void {
    this.isPasswordMasked = !this.isPasswordMasked;
    this.type = this.isPasswordMasked ? 'password' : 'text';
  }
}
