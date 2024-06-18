/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { HdsLinkColorValues, HdsLinkIconPositionValues } from './types.ts';

import type { HdsInteractiveSignature } from '../interactive/';
import type { HdsLinkColors, HdsLinkIconPositions } from './types.ts';
import type { FlightIconSignature } from '@hashicorp/ember-flight-icons/components/flight-icon';

export const DEFAULT_ICONPOSITION = HdsLinkIconPositionValues.Trailing;
export const DEFAULT_COLOR = HdsLinkColorValues.Primary;
export const ICONPOSITIONS: string[] = Object.values(HdsLinkIconPositionValues);
export const COLORS: string[] = Object.values(HdsLinkColorValues);

export interface HdsLinkInlineSignature {
  Args: HdsInteractiveSignature['Args'] & {
    color?: HdsLinkColors;
    icon?: FlightIconSignature['Args']['name'];
    iconPosition?: HdsLinkIconPositions;
  };
  Blocks: {
    default: [];
  };
  Element: HdsInteractiveSignature['Element'];
}

export default class HdsLinkInlineComponent extends Component<HdsLinkInlineSignature> {
  constructor(owner: unknown, args: HdsLinkInlineSignature['Args']) {
    super(owner, args);
    if (!(this.args.href || this.args.route)) {
      assert('@href or @route must be defined for <Hds::Link::Inline>');
    }
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of link to be used; acceptable values are `primary` and `secondary`
   */
  get color() {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Hds::Link::Inline" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  /**
   * @param iconPosition
   * @type {string}
   * @default leading
   * @description Positions the icon before or after the text; allowed values are `leading` or `trailing`
   */
  get iconPosition() {
    const { iconPosition = DEFAULT_ICONPOSITION } = this.args;

    assert(
      `@iconPosition for "Hds::Link::Inline" must be one of the following: ${ICONPOSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      ICONPOSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  /**
   * Get the class names to apply to the component.
   * @method LinkInline#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    const classes = ['hds-link-inline'];

    // add a class based on the @color argument
    classes.push(`hds-link-inline--color-${this.color}`);

    // add a class based on the @iconPosition argument
    classes.push(`hds-link-inline--icon-${this.iconPosition}`);

    return classes.join(' ');
  }
}
