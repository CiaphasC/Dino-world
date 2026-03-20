import type { ReactNode } from "react";
import type { SpriteLayoutStyle, SpriteMeta } from "../types";

interface SpriteLayerProps {
  sprite: SpriteMeta;
  layout?: SpriteLayoutStyle | undefined;
  children?: ReactNode;
}

const joinClasses = (...classes: Array<string | undefined>): string =>
  classes.filter((value) => Boolean(value && value.trim().length > 0)).join(" ");

export function SpriteLayer({ sprite, layout, children }: SpriteLayerProps) {
  return (
    <div
      className={joinClasses("sprite-wrapper", sprite.wrapperClassName)}
      data-sprite-id={sprite.id}
      style={layout?.wrapperStyle}
    >
      <img
        className={joinClasses(
          "scene-sprite",
          sprite.imageClassName,
          sprite.interactive ? "is-interactive" : undefined
        )}
        src={sprite.src}
        alt={sprite.alt}
        draggable={false}
        style={layout?.imageStyle}
      />
      {children}
    </div>
  );
}