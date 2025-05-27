export type TextInputType = "text" | "password";
export type TextInputVariant = "underlined" | "contained";
export type TextInputSize = "sm" | "md";
export type KEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }