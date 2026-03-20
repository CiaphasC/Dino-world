import type { CSSProperties } from "react";

export interface SpriteMeta {
  id: string;
  wrapperClassName: string;
  imageClassName: string;
  src: string;
  alt: string;
  interactive?: boolean;
}

export interface SpriteLayoutStyle {
  wrapperStyle: CSSProperties;
  imageStyle?: CSSProperties;
}

export type SpriteLayoutMap = Record<string, SpriteLayoutStyle>;