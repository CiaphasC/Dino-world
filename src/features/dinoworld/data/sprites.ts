import type { SpriteMeta } from "../types";

const spriteCatalog: Record<string, Omit<SpriteMeta, "id">> = {
  "paw-logo": {
    wrapperClassName: "brand-paw-logo-wrapper",
    imageClassName: "brand-paw-logo js-paw-logo",
    src: "/assets/hero/logo/PAW_ENG_LOGO.png",
    alt: "Logo Paw Patrol Dino Movie"
  },  "menu-left": {
    wrapperClassName: "brand-menu-left-wrapper",
    imageClassName: "brand-menu-left js-menu-left",
    src: "/assets/hero/letras/menu.png",
    alt: "Menu superior izquierdo",
    interactive: true
  },  "menu-right": {
    wrapperClassName: "brand-menu-right-wrapper",
    imageClassName: "brand-menu-right js-menu-right",
    src: "/assets/hero/letras/menu_2.png",
    alt: "Menu superior derecho",
    interactive: true
  },  "cave-frame": {
    wrapperClassName: "layer-frame-cave-wrapper",
    imageClassName: "layer-frame-cave",
    src: "/assets/hero/fondo/Capa_6_copia.png",
    alt: "Marco frontal de cueva"
  },  "border-left": {
    wrapperClassName: "layer-border-left-wrapper",
    imageClassName: "layer-border-left",
    src: "/assets/hero/fondo/Capa_58.png",
    alt: "Borde izquierdo de selva"
  },  "border-right": {
    wrapperClassName: "layer-border-right-wrapper",
    imageClassName: "layer-border-right",
    src: "/assets/hero/fondo/Capa_57.png",
    alt: "Borde derecho de selva"
  },  "top-canopy": {
    wrapperClassName: "layer-top-canopy-wrapper",
    imageClassName: "layer-top-canopy",
    src: "/assets/hero/fondo/Capa_56.png",
    alt: "Canopia superior"
  },  "vine-top": {
    wrapperClassName: "layer-vine-top-wrapper",
    imageClassName: "layer-vine-top js-vine",
    src: "/assets/hero/fondo/LIANA.png",
    alt: "Liana superior"
  },  "leaf-top-left": {
    wrapperClassName: "leaf-top-left-wrapper",
    imageClassName: "leaf-top-left js-leaf",
    src: "/assets/hero/fondo/Capa_54.png",
    alt: "Hoja superior izquierda"
  },  "leaf-top-right": {
    wrapperClassName: "leaf-top-right-wrapper",
    imageClassName: "leaf-top-right js-leaf",
    src: "/assets/hero/fondo/Capa_55.png",
    alt: "Hoja superior derecha"
  },  "skye": {
    wrapperClassName: "char-skye-wrapper",
    imageClassName: "char-skye js-character",
    src: "/assets/hero/animales/skye.png",
    alt: "Skye"
  },  "chase": {
    wrapperClassName: "char-chase-wrapper",
    imageClassName: "char-chase js-character",
    src: "/assets/hero/animales/chase.png",
    alt: "Chase"
  },  "rex": {
    wrapperClassName: "char-rex-wrapper",
    imageClassName: "char-rex js-character",
    src: "/assets/hero/animales/rex2.png",
    alt: "Rex en primer plano"
  },  "trex": {
    wrapperClassName: "char-trex-wrapper",
    imageClassName: "char-trex js-character",
    src: "/assets/hero/animales/timmyrex.png",
    alt: "T-Rex central"
  },  "zuma": {
    wrapperClassName: "char-zuma-wrapper",
    imageClassName: "char-zuma js-character",
    src: "/assets/hero/animales/zuma.png",
    alt: "Zuma"
  },  "rubble": {
    wrapperClassName: "char-rubble-wrapper",
    imageClassName: "char-rubble js-character",
    src: "/assets/hero/animales/rubble.png",
    alt: "Rubble"
  },  "marshall": {
    wrapperClassName: "char-marshall-wrapper",
    imageClassName: "char-marshall js-character",
    src: "/assets/hero/animales/marshal.png",
    alt: "Marshall en primer plano"
  },  "tech-dino-foot": {
    wrapperClassName: "tech-dino-foot-wrapper",
    imageClassName: "tech-dino-foot js-tech-ui",
    src: "/assets/hero/fondo/Capa_53.png",
    alt: "Interfaz holografica izquierda"
  },  "tech-paw": {
    wrapperClassName: "tech-paw-wrapper",
    imageClassName: "tech-paw js-tech-ui",
    src: "/assets/hero/fondo/Capa_51.png",
    alt: "Interfaz holografica derecha"
  },  "tech-meter": {
    wrapperClassName: "tech-meter-wrapper",
    imageClassName: "tech-meter js-tech-ui",
    src: "/assets/hero/fondo/Capa_52.png",
    alt: "Medidor holografico derecho"
  },  "leaf-bottom-left": {
    wrapperClassName: "leaf-bottom-left-wrapper",
    imageClassName: "leaf-bottom-left js-leaf",
    src: "/assets/hero/fondo/Capa_18.png",
    alt: "Hoja inferior izquierda"
  },  "leaf-bottom-right": {
    wrapperClassName: "leaf-bottom-right-wrapper",
    imageClassName: "leaf-bottom-right js-leaf",
    src: "/assets/hero/fondo/Capa_50.png",
    alt: "Hoja inferior derecha"
  },  "vine-bottom": {
    wrapperClassName: "layer-vine-bottom-wrapper",
    imageClassName: "layer-vine-bottom js-vine",
    src: "/assets/hero/fondo/LIANA_2.png",
    alt: "Liana inferior"
  },  "dino-world-logo": {
    wrapperClassName: "brand-dino-world-wrapper",
    imageClassName: "brand-dino-world js-dino-logo",
    src: "/assets/hero/letras/dinoworld3.png",
    alt: "Logo central Dino World"
  },  "discover-label": {
    wrapperClassName: "discover-label-wrapper",
    imageClassName: "discover-label",
    src: "/assets/hero/letras/DISCOVER_NOW.png",
    alt: "Texto Discover Now"
  },  "discover-arrow-1": {
    wrapperClassName: "discover-arrow-wrapper",
    imageClassName: "discover-arrow js-arrow",
    src: "/assets/hero/letras/Capa_20.png",
    alt: "Flecha superior"
  },  "discover-arrow-2": {
    wrapperClassName: "discover-arrow-wrapper",
    imageClassName: "discover-arrow js-arrow",
    src: "/assets/hero/letras/Capa_20_copia.png",
    alt: "Flecha central"
  },  "discover-arrow-3": {
    wrapperClassName: "discover-arrow-wrapper",
    imageClassName: "discover-arrow js-arrow",
    src: "/assets/hero/letras/Capa_20_copia_2.png",
    alt: "Flecha inferior"
  },  "body-row2-divider": {
    wrapperClassName: "body-row2-divider-wrapper",
    imageClassName: "body-row2-divider",
    src: "/assets/body/fondo/Capa_32_copia.png",
    alt: "Separador decorativo row2"
  },  "body-row3-capa46": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa46-wrapper",
    imageClassName: "body-row3-capa46",
    src: "/assets/body/fondo/Capa_46.png",
    alt: "Hoja superior decorativa izquierda"
  },  "body-row3-capa39": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa39-wrapper",
    imageClassName: "body-row3-capa39",
    src: "/assets/body/fondo/Capa_39_copia.png",
    alt: "Hoja inferior decorativa izquierda"
  },  "body-row3-capa40": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa40-wrapper",
    imageClassName: "body-row3-capa40",
    src: "/assets/body/fondo/Capa_40.png",
    alt: "Hoja lateral izquierda"
  },  "body-row3-capa41": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa41-wrapper",
    imageClassName: "body-row3-capa41",
    src: "/assets/body/fondo/Capa_41.png",
    alt: "Marco rojo principal"
  },  "body-row3-left-bg": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-bg-wrapper",
    imageClassName: "body-row3-left-bg",
    src: "/assets/body/animales/Captura_de_pantalla_2026-03-08_a_las_21.35.14_topil.png",
    alt: "Fondo tropical dentro del marco rojo"
  },  "body-row3-left-character": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-character-wrapper",
    imageClassName: "body-row3-left-character",
    src: "/assets/body/animales/ChatGPT_Image_4_mar_2026__23_30_36_copia_topil.png",
    alt: "Humdinger dentro del marco rojo"
  },  "body-row3-left-planta7": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-planta7-wrapper",
    imageClassName: "body-row3-left-planta7",
    src: "/assets/body/partial/row3_left_planta7.png",
    alt: "Planta superior azul del marco rojo"
  },  "body-row3-left-planta4": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-planta4-wrapper",
    imageClassName: "body-row3-left-planta4",
    src: "/assets/body/partial/row3_left_planta4.png",
    alt: "Flor lila delantera del marco rojo"
  },  "body-row3-left-roca2": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-roca2-wrapper",
    imageClassName: "body-row3-left-roca2",
    src: "/assets/body/partial/row3_left_roca2.png",
    alt: "Roca derecha del marco rojo"
  },  "body-row3-left-planta3": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-planta3-wrapper",
    imageClassName: "body-row3-left-planta3",
    src: "/assets/body/partial/row3_left_planta3.png",
    alt: "Planta izquierda del marco rojo"
  },  "body-row3-left-roca": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-roca-wrapper",
    imageClassName: "body-row3-left-roca",
    src: "/assets/body/partial/row3_left_roca.png",
    alt: "Roca izquierda del marco rojo"
  },  "body-row3-left-planta5": {
    wrapperClassName: "body-row3-left-clip-wrapper body-row3-left-planta5-wrapper",
    imageClassName: "body-row3-left-planta5",
    src: "/assets/body/partial/row3_left_planta5.png",
    alt: "Vegetacion frontal del marco rojo"
  },  "body-row3-capa44": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa44-wrapper",
    imageClassName: "body-row3-capa44",
    src: "/assets/body/fondo/Capa_44.png",
    alt: "Marco superior del panel derecho"
  },  "body-row3-title": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-title-wrapper",
    imageClassName: "body-row3-title",
    src: "/assets/body/letras/Humdinger_threatens.png",
    alt: "Titulo Humdinger threatens"
  },  "body-row3-description": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-description-wrapper",
    imageClassName: "body-row3-description",
    src: "/assets/body/letras/But_Humdinger_threatens_the_ecosystem_with_his_exploitation_and.png",
    alt: "Descripcion de la amenaza de Humdinger"
  },  "body-row3-capa48": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa48-wrapper",
    imageClassName: "body-row3-capa48",
    src: "/assets/body/fondo/Capa_48.png",
    alt: "Marco inferior del panel derecho"
  },  "body-row3-capa49": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa49-wrapper",
    imageClassName: "body-row3-capa49",
    src: "/assets/body/fondo/Capa_49.png",
    alt: "Anclaje inferior izquierdo del panel derecho"
  },  "body-row3-capa45": {
    wrapperClassName: "body-row3-layer-wrapper body-row3-capa45-wrapper",
    imageClassName: "body-row3-capa45",
    src: "/assets/body/fondo/Capa_45.png",
    alt: "Planta lateral derecha del panel"
  },  "body-row4-capa66": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa66-wrapper",
    imageClassName: "body-row4-capa66",
    src: "/assets/body/letras/Capa_66.png",
    alt: "Texto superior We have got"
  },  "body-row4-capa65": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa65-wrapper",
    imageClassName: "body-row4-capa65",
    src: "/assets/body/letras/Capa_65.png",
    alt: "Texto central Dinos"
  },  "body-row4-capa64": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa64-wrapper",
    imageClassName: "body-row4-capa64",
    src: "/assets/body/paisaje/Capa_64.png",
    alt: "Paisaje central del bloque dinos"
  },  "body-row4-capa68": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa68-wrapper",
    imageClassName: "body-row4-capa68",
    src: "/assets/body/fondo/Capa_68.png",
    alt: "Dino lateral derecho del bloque dinos"
  },  "body-row4-capa70": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa70-wrapper",
    imageClassName: "body-row4-capa70",
    src: "/assets/body/paisaje/Capa_70_copia.png",
    alt: "Suelo medio del bloque dinos"
  },  "body-row4-ampliacion": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-ampliacion-wrapper",
    imageClassName: "body-row4-ampliacion",
    src: "/assets/body/paisaje/Ampliación_generativa.png",
    alt: "Extension inferior del bloque dinos"
  },  "body-row4-chase2": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-chase2-wrapper",
    imageClassName: "body-row4-chase2",
    src: "/assets/body/animales/chase2.png",
    alt: "Chase en la escena dinos"
  },  "body-row4-skye2": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-skye2-wrapper",
    imageClassName: "body-row4-skye2",
    src: "/assets/body/animales/skye2.png",
    alt: "Skye en la escena dinos"
  },  "body-row4-rubble2": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-rubble2-wrapper",
    imageClassName: "body-row4-rubble2",
    src: "/assets/body/animales/rubble2.png",
    alt: "Rubble en la escena dinos"
  },  "body-row4-rex": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-rex-wrapper",
    imageClassName: "body-row4-rex",
    src: "/assets/body/animales/rex.png",
    alt: "Rocky en la escena dinos"
  },  "body-row4-marshall2": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-marshall2-wrapper",
    imageClassName: "body-row4-marshall2",
    src: "/assets/body/animales/marshall2.png",
    alt: "Marshall en la escena dinos"
  },  "body-row4-rhubarb": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-rhubarb-wrapper",
    imageClassName: "body-row4-rhubarb",
    src: "/assets/body/animales/rhubarb.png",
    alt: "Dino lateral derecho superior"
  },  "body-row4-timmyrex": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-timmyrex-wrapper",
    imageClassName: "body-row4-timmyrex",
    src: "/assets/body/animales/timmyrex.png",
    alt: "Dino lateral izquierdo superior"
  },  "body-row4-capa31": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa31-wrapper",
    imageClassName: "body-row4-capa31",
    src: "/assets/body/letras/Capa_31.png",
    alt: "Texto pequeño To"
  },  "body-row4-capa29": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa29-wrapper",
    imageClassName: "body-row4-capa29",
    src: "/assets/body/letras/Capa_29.png",
    alt: "Texto principal Save base"
  },  "body-row4-capa63": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa63-wrapper",
    imageClassName: "body-row4-capa63",
    src: "/assets/body/letras/Capa_63.png",
    alt: "Texto Save frontal"
  },  "body-row4-planta6-copia": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta6-copia-wrapper",
    imageClassName: "body-row4-planta6-copia",
    src: "/assets/body/plantas/planta6_copia.png",
    alt: "Planta lateral derecha capa trasera"
  },  "body-row4-planta5-copia": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta5-copia-wrapper",
    imageClassName: "body-row4-planta5-copia",
    src: "/assets/body/plantas/planta5_copia.png",
    alt: "Vegetacion lateral derecha alta"
  },  "body-row4-planta5-copia2": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta5-copia2-wrapper",
    imageClassName: "body-row4-planta5-copia2",
    src: "/assets/body/plantas/planta5_copia_2.png",
    alt: "Vegetacion lateral derecha media"
  },  "body-row4-planta3-copia": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta3-copia-wrapper",
    imageClassName: "body-row4-planta3-copia",
    src: "/assets/body/plantas/planta3_copia.png",
    alt: "Hoja lateral derecha inferior"
  },  "body-row4-planta7": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta7-wrapper",
    imageClassName: "body-row4-planta7",
    src: "/assets/body/plantas/planta7.png",
    alt: "Vegetacion frontal izquierda grande"
  },  "body-row4-planta6": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta6-wrapper",
    imageClassName: "body-row4-planta6",
    src: "/assets/body/plantas/planta6.png",
    alt: "Planta izquierda media"
  },  "body-row4-planta5": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta5-wrapper",
    imageClassName: "body-row4-planta5",
    src: "/assets/body/plantas/planta5.png",
    alt: "Vegetacion izquierda lateral alta"
  },  "body-row4-planta": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-planta-wrapper",
    imageClassName: "body-row4-planta",
    src: "/assets/body/plantas/planta.png",
    alt: "Planta frontal izquierda roja"
  },  "body-row4-capa62": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa62-wrapper",
    imageClassName: "body-row4-capa62",
    src: "/assets/body/fondo/Capa_62.png",
    alt: "Franja frontal superior de hierba"
  },  "body-row4-capa59": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa59-wrapper",
    imageClassName: "body-row4-capa59",
    src: "/assets/body/fondo/Capa_59.png",
    alt: "Franja frontal central de hierba"
  },  "body-row4-capa60": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa60-wrapper",
    imageClassName: "body-row4-capa60",
    src: "/assets/body/fondo/Capa_60.png",
    alt: "Franja frontal derecha de hierba"
  },  "body-row4-capa61": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa61-wrapper",
    imageClassName: "body-row4-capa61",
    src: "/assets/body/fondo/Capa_61.png",
    alt: "Franja frontal izquierda de hierba"
  },  "body-row4-capa34": {
    wrapperClassName: "body-row4-layer-wrapper body-row4-capa34-wrapper",
    imageClassName: "body-row4-capa34",
    src: "/assets/body/fondo/Capa_34.png",
    alt: "Base de hierbas frontales del bloque dinos"
  },  "tail-row1": {
    wrapperClassName: "tail-row1-wrapper",
    imageClassName: "tail-row1",
    src: "/assets/section_island_adventures/fondo/psd2_row1_group_clean.png",
    alt: "Bloque On an island full of adventures"
  },  "tail-row2": {
    wrapperClassName: "tail-row2-wrapper",
    imageClassName: "tail-row2",
    src: "/assets/section_island_adventures/fondo/psd2_row2_group.png",
    alt: "Bloque Stomp Around con video"
  },  "tail-row3": {
    wrapperClassName: "tail-row3-wrapper",
    imageClassName: "tail-row3",
    src: "/assets/section_island_adventures/fondo/psd2_row3_group.png",
    alt: "Bloque Favorite Characters"
  },  "tail-row4": {
    wrapperClassName: "tail-row4-wrapper",
    imageClassName: "tail-row4",
    src: "/assets/section_island_adventures/fondo/psd2_row4_group.png",
    alt: "Bloque Customize your favorite heroes"
  },  "tail-row5": {
    wrapperClassName: "tail-row5-wrapper",
    imageClassName: "tail-row5",
    src: "/assets/section_island_adventures/fondo/psd2_row5_group.png",
    alt: "Bloque final Take care y Explore"
  },
};

const buildSprites = <TIds extends readonly string[]>(ids: TIds): SpriteMeta[] =>
  ids.map((id) => {
    const sprite = spriteCatalog[id];

    if (!sprite) {
      throw new Error(`Missing sprite metadata for id: ${id}`);
    }

    return {
      id,
      ...sprite,
    };
  });

const HEADER_IDS = ["paw-logo", "menu-left", "menu-right"] as const;

const HERO_IDS = [
  "cave-frame",
  "border-left",
  "border-right",
  "top-canopy",
  "vine-top",
  "leaf-top-left",
  "leaf-top-right",
  "skye",
  "chase",
  "rex",
  "trex",
  "zuma",
  "rubble",
  "marshall",
  "tech-dino-foot",
  "tech-paw",
  "tech-meter",
  "leaf-bottom-left",
  "leaf-bottom-right",
  "vine-bottom",
  "dino-world-logo",
  "discover-label",
  "discover-arrow-1",
  "discover-arrow-2",
  "discover-arrow-3",
] as const;

const BODY_PREFIX_IDS = [
  "body-row2-divider",
  "body-row3-capa46",
  "body-row3-capa39",
  "body-row3-capa40",
  "body-row3-capa41",
] as const;

const BODY_ROW3_CLIP_IDS = [
  "body-row3-left-bg",
  "body-row3-left-character",
  "body-row3-left-planta7",
  "body-row3-left-planta4",
  "body-row3-left-roca2",
  "body-row3-left-planta3",
  "body-row3-left-roca",
  "body-row3-left-planta5",
] as const;

const BODY_ROW3_RIGHT_IDS = [
  "body-row3-capa44",
  "body-row3-title",
  "body-row3-description",
  "body-row3-capa48",
  "body-row3-capa49",
  "body-row3-capa45",
] as const;

const BODY_ROW4_IDS = [
  "body-row4-capa66",
  "body-row4-capa65",
  "body-row4-capa64",
  "body-row4-capa68",
  "body-row4-capa70",
  "body-row4-ampliacion",
  "body-row4-chase2",
  "body-row4-skye2",
  "body-row4-rubble2",
  "body-row4-rex",
  "body-row4-marshall2",
  "body-row4-rhubarb",
  "body-row4-timmyrex",
  "body-row4-capa31",
  "body-row4-capa29",
  "body-row4-capa63",
  "body-row4-planta6-copia",
  "body-row4-planta5-copia",
  "body-row4-planta5-copia2",
  "body-row4-planta3-copia",
  "body-row4-planta7",
  "body-row4-planta6",
  "body-row4-planta5",
  "body-row4-planta",
  "body-row4-capa62",
  "body-row4-capa59",
  "body-row4-capa60",
  "body-row4-capa61",
  "body-row4-capa34",
] as const;

const TAIL_IDS = ["tail-row1", "tail-row2", "tail-row3", "tail-row4", "tail-row5"] as const;

export const BODY_ROW3_CONTAINER_ID = "body-row3-capa42";

export const headerSprites = buildSprites(HEADER_IDS);
export const heroSprites = buildSprites(HERO_IDS);
export const bodyPrefixSprites = buildSprites(BODY_PREFIX_IDS);
export const bodyRow3ClipSprites = buildSprites(BODY_ROW3_CLIP_IDS);
export const bodyRow3RightSprites = buildSprites(BODY_ROW3_RIGHT_IDS);
export const bodyRow4Sprites = buildSprites(BODY_ROW4_IDS);
export const tailSprites = buildSprites(TAIL_IDS);
