export enum HdsBadgeCountSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
export type HdsBadgeSizes = `${HdsBadgeCountSizeValues}`;

export enum HdsBadgeCountTypeValues {
  Filled = 'filled',
  Inverted = 'inverted',
  Outlined = 'outlined',
}
export type HdsBadgeTypes = `${HdsBadgeCountTypeValues}`;

export enum HdsBadgeCountColorValues {
  Neutral = 'neutral',
  NeutralDarkMode = 'neutral-dark-mode',
}
export type HdsBadgeCountColors = `${HdsBadgeCountColorValues}`;
