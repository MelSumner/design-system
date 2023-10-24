<!--
 Copyright (c) HashiCorp, Inc.
 SPDX-License-Identifier: MPL-2.0
-->

<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->

<p class="doc-whats-new-changelog-npm-info">
  <strong><code>npm package: @hashicorp/design-system-components</code></strong>
  <a href="https://badge.fury.io/js/%40hashicorp%2Fdesign-system-components">
    <img src="https://badge.fury.io/js/%40hashicorp%2Fdesign-system-components.svg" alt="npm version" height="20">
  </a>
</p>

## 2.15.0

**Minor changes**

`Button` - updated horizontal padding of icon-only variant

`Dropdown::ToggleIcon` - updated sizing of the "small" variant to match the height of the "small" variant `Button`

<small>[#1690](https://github.com/hashicorp/design-system/pull/1690)</small>

**Patch changes**

`Pagination` - Removed handling of query parameters from `onPageSizeChange` function.

<small>[#1736](https://github.com/hashicorp/design-system/pull/1736)</small>

_Notice: while technically this is a breaking change, we consider this a fast-follow fix for the previous release._

## 2.14.2

**Patch changes**

`Pagination` - updated the logic for “Compact” variant to expose `@currentPageSize` and handle controlled/uncontrolled changes

<small>[#1724](https://github.com/hashicorp/design-system/pull/1724)</small>

---

`Tabs` - replace `assert` with `warn` in `setIndicator` function

<small>[#1716](https://github.com/hashicorp/design-system/pull/1716)</small>

## 2.14.1

**Patch changes**

`Tabs` - Fixed issue with `@isSelected` dynamically changed within `#each` loops

<small>[#1709](https://github.com/hashicorp/design-system/pull/1709)</small>

## 2.14.0

**Minor changes**

`Pagination::Compact` - Added option to show "SizeSelector" element

<small>[#1700](https://github.com/hashicorp/design-system/pull/1700)</small>

---

`Tabs` - Refactored logic for `Tabs` component + `Tab/Panel` sub-components to support more complex use cases:

- introduced `@selectedTabIndex` argument to control the "selected" tab from the consuming application, e.g. via query params (effort spearheaded by @MiniHeyd)
- fixed issue with nested tabs not initializing the "selected" indicator correctly
- fixed issue with dynamic tab content not updating the "selected" indicator correctly

<small>[#1688](https://github.com/hashicorp/design-system/pull/1688)</small>

## 2.13.0

**Minor changes**

`AppFooter` - Added new component

<small>[#1623](https://github.com/hashicorp/design-system/pull/1623)</small>

---

`SideNav` - add `@isCollapsible` (to control if users can collapse the sidenav on 'desktop' viewports) and `@isMinimized` (to control the default state on 'desktop' viewports) arguments

<small>[#1630](https://github.com/hashicorp/design-system/pull/1630)</small>


**Patch changes**

`Tag` - Updated padding for dismiss button for WCAG conformance

<small>[#1696](https://github.com/hashicorp/design-system/pull/1696)</small>

---

`Link::Standalone` – increase target size

<small>[#1678](https://github.com/hashicorp/design-system/pull/1678)</small>

---

**🔄 Updated dependencies:**

  - @hashicorp/design-system-tokens@1.9.0

## 2.12.2

**Patch changes**

`PowerSelect` - fix style overrides when the list is positioned above

<small>[#1655](https://github.com/hashicorp/design-system/pull/1655)</small>

---

`Text` - Fixed issue with whitespace adding extra underline when used in links (eg. inside a `Link::Inline`)

<small>[#1652](https://github.com/hashicorp/design-system/pull/1652)</small>

---

**🔄 Updated dependencies:**

  - @hashicorp/ember-flight-icons@3.1.3

## 2.12.1

**Patch changes**

`Pagination` - Bugfix `aria-label` on the component

<small>[#1627](https://github.com/hashicorp/design-system/pull/1627)</small>

---

`Dropdown` - changed `@height` property to use `max-height` instead of a fixed height.

<small>[#1635](https://github.com/hashicorp/design-system/pull/1635)</small>

## 2.12.0

**Minor changes**

`IconTile` - updated component to include `vault-secrets` product option

<small>[#1640](https://github.com/hashicorp/design-system/pull/1640)</small>

**Patch changes**

`Text` - Removed leftover `console.log` from code

<small>[#1615](https://github.com/hashicorp/design-system/pull/1615)</small>

---

Refactored the layout of the `Dropdown` checkbox and radio inputs to make the gap between the inputs and the associated text, as well as the icon and count, clickable.

<small>[#1618](https://github.com/hashicorp/design-system/pull/1618)</small>

---

`Hds::Link::Standalone` - Changed font-weight from 500 to 400 to match font-weight of `Hds::Button`.

<small>[#1617](https://github.com/hashicorp/design-system/pull/1617)</small>

---

`Stepper` - removed some CSS declarations that were not used/applied

<small>[#1628](https://github.com/hashicorp/design-system/pull/1628)</small>

---

**🔄 Updated dependencies:**

  - @hashicorp/design-system-tokens@1.8.0
  - @hashicorp/ember-flight-icons@3.1.2

## 2.11.0

**Minor changes**

`Hds::Text` - Added new `Text` component

<small>[#1490](https://github.com/hashicorp/design-system/pull/1490)</small>

---

`Hds::Form::MaskedInput` - Add `hasCopyButton` argument

<small>[#1587](https://github.com/hashicorp/design-system/pull/1587)</small>

**Patch changes**

`Form::Indicator` - Remove aria-hidden from the "optional" `<span>`

<small>[#1577](https://github.com/hashicorp/design-system/pull/1577) - Thanks [@DingoEatingFuzz](https://github.com/DingoEatingFuzz) for the contribution! 🙏</small>

---

Removed `ember-named-blocks-polyfill` as all consumers of HDS are on Ember 3.25 or later now. This can be installed locally if it is still needed.

<small>[#1606](https://github.com/hashicorp/design-system/pull/1606)</small>

---

`Alert`, `Toast`: Fixed an issue with anchor tag color styles within Description that had been overriding `Hds::Link` color; changed the default color for HTML links within Description to "neutral" to better align with existing guidance for links in the actions and improve accessible contrast.

<small>[#1576](https://github.com/hashicorp/design-system/pull/1576)</small>

---

**🔄 Updated dependencies:**

  - @hashicorp/ember-flight-icons@3.1.1

## 2.10.0

**Minor changes**

Added new `FileInput` component

<small>[#1535](https://github.com/hashicorp/design-system/pull/1535)</small>

**Patch changes**

Remove unnecessary export of `hds/copy/index.js`

<small>[#1570](https://github.com/hashicorp/design-system/pull/1570)</small>

---

`Hds::Tabs` - Fix missing tab indicator when used in Modal or Flyout

<small>[#1575](https://github.com/hashicorp/design-system/pull/1575)</small>

---

`Copy::Snippet` - Added support for container and updated API docs

<small>[#1567](https://github.com/hashicorp/design-system/pull/1567)</small>

---

`Hds::Tabs` - Fixed tabs and panels misbehaving on route change

<small>[#1571](https://github.com/hashicorp/design-system/pull/1571)</small>

---

<small>[#1568](https://github.com/hashicorp/design-system/pull/1568)</small>

`Copy::Button`, `Copy::Snippet` - Updated error icon

---

`Hds::SegmentedGroup` - Prevent `border-radius` from interfering with underlying elements

<small>[#1555](https://github.com/hashicorp/design-system/pull/1555)</small>

---

`Table` - Resolved issue where `ThSort` was not supporting right-aligned text properly

<small>[#1565](https://github.com/hashicorp/design-system/pull/1565)</small>

---

**🔄 Updated dependencies:**
  - @hashicorp/ember-flight-icons@3.1.0


---

_[Read the full changelog](https://github.com/hashicorp/design-system/blob/main/packages/components/CHANGELOG.md)_