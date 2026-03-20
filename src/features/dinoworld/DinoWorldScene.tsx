import { useRef, type CSSProperties } from "react";
import { IntroHeadline } from "./components/IntroHeadline";
import { SpriteLayer } from "./components/SpriteLayer";
import {
  BODY_ROW3_CONTAINER_ID,
  bodyPrefixSprites,
  bodyRow3ClipSprites,
  bodyRow3RightSprites,
  bodyRow4Sprites,
  headerSprites,
  heroSprites,
  tailSprites,
} from "./data/sprites";
import { bodySceneRatio, heroSceneRatio, spriteLayoutMap, tailSceneRatio } from "./data/layout";
import { useDinoWorldAnimations } from "./hooks/useDinoWorldAnimations";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

const heroStageStyle = {
  "--shared-landscape-url": "url('/assets/hero/paisaje/fondoselva.jpg')",
} as CSSProperties;

const cloudsStyle = {
  backgroundImage: "url('/assets/hero/fondo/imgi_7_68ee74b1f45fbfb23fb6405a_clouds.webp')",
} as CSSProperties;

const buildSceneRatioStyle = (ratio: number): CSSProperties =>
  ({
    "--scene-ratio": String(ratio),
  }) as CSSProperties;

export function DinoWorldScene() {
  const appShellRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useDinoWorldAnimations(appShellRef, prefersReducedMotion);

  const heroCanvasStyle = buildSceneRatioStyle(heroSceneRatio);
  const bodyCanvasStyle = buildSceneRatioStyle(bodySceneRatio);
  const tailCanvasStyle = buildSceneRatioStyle(tailSceneRatio);

  return (
    <main id="app-shell" className="app-shell" ref={appShellRef}>
      <section className="hero-shell" aria-label="Escena principal Dino World">
        <header id="site-header" className="site-header" aria-label="Cabecera principal Dino World">
          <div id="header-canvas" className="header-canvas">
            {headerSprites.map((sprite) => (
              <SpriteLayer key={sprite.id} sprite={sprite} />
            ))}
          </div>
        </header>

        <section className="hero-stage" aria-label="Escena hero Dino World" style={heroStageStyle}>
          <div id="image-clouds" className="image-clouds" style={cloudsStyle} />

          <div id="hero-canvas" className="hero-canvas" style={heroCanvasStyle}>
            {heroSprites.map((sprite) => (
              <SpriteLayer key={sprite.id} sprite={sprite} layout={spriteLayoutMap[sprite.id]} />
            ))}
          </div>
        </section>
      </section>

      <section className="body-stage" aria-label="Seccion body Dino World">
        <div id="body-canvas" className="body-canvas" style={bodyCanvasStyle}>
          {bodyPrefixSprites.map((sprite) => (
            <SpriteLayer key={sprite.id} sprite={sprite} layout={spriteLayoutMap[sprite.id]} />
          ))}

          <div
            className="sprite-wrapper body-row3-layer-wrapper body-row3-capa42-wrapper"
            data-sprite-id={BODY_ROW3_CONTAINER_ID}
            style={spriteLayoutMap[BODY_ROW3_CONTAINER_ID]?.wrapperStyle}
          >
            {bodyRow3ClipSprites.map((sprite) => (
              <SpriteLayer key={sprite.id} sprite={sprite} layout={spriteLayoutMap[sprite.id]} />
            ))}
          </div>

          {bodyRow3RightSprites.map((sprite) => (
            <SpriteLayer key={sprite.id} sprite={sprite} layout={spriteLayoutMap[sprite.id]} />
          ))}

          <div className="body-row4-group">
            {bodyRow4Sprites.map((sprite) => (
              <SpriteLayer key={sprite.id} sprite={sprite} layout={spriteLayoutMap[sprite.id]} />
            ))}
          </div>

          <div className="intro-headline-wrapper">
            <IntroHeadline />
          </div>
        </div>
      </section>

      <section className="tail-stage" aria-label="Continuacion final Dino World">
        <div id="tail-canvas" className="tail-canvas" style={tailCanvasStyle}>
          {tailSprites.map((sprite) => (
            <SpriteLayer key={sprite.id} sprite={sprite} layout={spriteLayoutMap[sprite.id]} />
          ))}
        </div>
      </section>
    </main>
  );
}