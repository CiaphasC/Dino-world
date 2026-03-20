import type { CSSProperties } from "react";
import type { SpriteLayoutMap } from "../types";

type StylePrimitive = string | number;
type RawSpriteStyle = Record<string, StylePrimitive>;

interface RawSpriteDefinition {
  id: string;
  style: RawSpriteStyle;
}

interface SceneBounds {
  width: number;
  height: number;
  ratio: number;
}

const HERO_SCENE_BOUNDS: SceneBounds = {
  width: 3327,
  height: 2314,
  ratio: 3327 / 2314,
};

const FOREGROUND_Y_OFFSET = 72;
const HERO_SUBJECTS_EXTRA_DROP = 126;
const DISCOVER_EXTRA_DROP = 48;

const heroPctX = (value: number): string => `${(value / HERO_SCENE_BOUNDS.width) * 100}%`;
const heroPctY = (value: number): string => `${(value / HERO_SCENE_BOUNDS.height) * 100}%`;

const heroBox = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  zIndex: number,
  yOffset = 0,
  extra: RawSpriteStyle = {}
): RawSpriteStyle => {
  void y2;

  return {
    left: heroPctX(x1),
    top: heroPctY(y1 + yOffset),
    width: heroPctX(x2 - x1),
    zIndex,
    ...extra,
  };
};

const heroSpriteDefinitions: RawSpriteDefinition[] = [

    {
      id: "cave-frame",
      style: {
        left: "0%",
        top: "0%",
        width: "100%",
        height: "100%",
        zIndex: 10,
        objectFit: "cover",
      },
    },
    {
      id: "border-left",
      style: {
        ...heroBox(390, 418, 1139, 2218, 7, FOREGROUND_Y_OFFSET),
        transform: "scaleY(1.28)",
        transformOrigin: "top center",
      },
    },
    {
      id: "border-right",
      style: {
        ...heroBox(2182, 418, 2983, 2218, 7, FOREGROUND_Y_OFFSET),
        transform: "scaleY(1.28)",
        transformOrigin: "top center",
      },
    },
    {
      id: "top-canopy",
      style: heroBox(1040, 330, 2276, 630, 7, FOREGROUND_Y_OFFSET),
    },
    {
      id: "vine-top",
      style: heroBox(1070, 326, 1789, 648, 7, FOREGROUND_Y_OFFSET),
    },
    {
      id: "leaf-top-left",
      style: heroBox(104, 425, 567, 823, 12, FOREGROUND_Y_OFFSET),
    },
    {
      id: "leaf-top-right",
      style: heroBox(2718, 420, 3327, 775, 12, FOREGROUND_Y_OFFSET),
    },
    {
      id: "skye",
      style: heroBox(335, 617, 816, 1104, 20, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "chase",
      style: heroBox(609, 699, 1135, 1216, 30, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "rex",
      style: heroBox(613, 993, 1262, 1671, 40, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "trex",
      style: heroBox(664, 1198, 2044, 1948, 8, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "zuma",
      style: heroBox(2543, 617, 3016, 1150, 20, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "rubble",
      style: heroBox(2316, 846, 2841, 1413, 30, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "marshall",
      style: heroBox(2051, 889, 2543, 1655, 40, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "tech-dino-foot",
      style: heroBox(219, 1352, 504, 1633, 50, FOREGROUND_Y_OFFSET),
    },
    {
      id: "tech-paw",
      style: heroBox(2921, 1220, 3121, 1425, 50, FOREGROUND_Y_OFFSET),
    },
    {
      id: "tech-meter",
      style: heroBox(2823, 1355, 2871, 1573, 50, FOREGROUND_Y_OFFSET),
    },
    {
      id: "leaf-bottom-left",
      style: heroBox(417, 1645, 797, 1891, 15, FOREGROUND_Y_OFFSET, {
        height: heroPctY(1891 - 1645),
      }),
    },
    {
      id: "leaf-bottom-right",
      style: heroBox(2423, 1570, 2698, 1832, 80, FOREGROUND_Y_OFFSET),
    },
    {
      id: "vine-bottom",
      style: heroBox(1354, 2088, 1934, 2432, 6, FOREGROUND_Y_OFFSET + 82),
    },
    {
      id: "dino-world-logo",
      style: heroBox(1029, 1372, 2259, 1689, 60, FOREGROUND_Y_OFFSET + HERO_SUBJECTS_EXTRA_DROP),
    },
    {
      id: "discover-label",
      style: heroBox(1437, 1783, 1844, 1825, 70, FOREGROUND_Y_OFFSET + DISCOVER_EXTRA_DROP),
    },
    {
      id: "discover-arrow-1",
      style: heroBox(1628, 1873, 1659, 1891, 70, FOREGROUND_Y_OFFSET + DISCOVER_EXTRA_DROP),
    },
    {
      id: "discover-arrow-2",
      style: heroBox(1628, 1886, 1659, 1905, 70, FOREGROUND_Y_OFFSET + DISCOVER_EXTRA_DROP),
    },
    {
      id: "discover-arrow-3",
      style: heroBox(1628, 1900, 1659, 1918, 70, FOREGROUND_Y_OFFSET + DISCOVER_EXTRA_DROP),
    },
  ];

const BODY_START_Y = 1956;
const BODY_END_Y = 7152;
const BODY_SCENE_BOUNDS: SceneBounds = {
  width: 3287,
  height: BODY_END_Y - BODY_START_Y,
  ratio: 3287 / (BODY_END_Y - BODY_START_Y),
};

const bodyPctX = (value: number): string => `${(value / BODY_SCENE_BOUNDS.width) * 100}%`;
const bodyPctY = (value: number): string => `${(value / BODY_SCENE_BOUNDS.height) * 100}%`;

const bodyBox = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  zIndex: number,
  extra: RawSpriteStyle = {}
): RawSpriteStyle => {
  void y2;

  return {
    left: bodyPctX(x1),
    top: bodyPctY(y1 - BODY_START_Y),
    width: bodyPctX(x2 - x1),
    zIndex,
    ...extra,
  };
};

const ROW3_LEFT_CLIP_BOUNDS = {
  x1: 542,
  y1: 3477,
  width: 805,
  height: 1065,
};

const row3LeftClipPctX = (value: number): string => `${(value / ROW3_LEFT_CLIP_BOUNDS.width) * 100}%`;
const row3LeftClipPctY = (value: number): string => `${(value / ROW3_LEFT_CLIP_BOUNDS.height) * 100}%`;

const row3LeftClipBox = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  zIndex: number,
  extra: RawSpriteStyle = {}
): RawSpriteStyle => {
  void y2;

  return {
    left: row3LeftClipPctX(x1 - ROW3_LEFT_CLIP_BOUNDS.x1),
    top: row3LeftClipPctY(y1 - ROW3_LEFT_CLIP_BOUNDS.y1),
    width: row3LeftClipPctX(x2 - x1),
    zIndex,
    ...extra,
  };
};

const bodySpriteDefinitions: RawSpriteDefinition[] = [

    {
      id: "body-row2-divider",
      style: bodyBox(1373, 3038, 1915, 3085, 11),
    },
    {
      id: "body-row3-capa46",
      style: bodyBox(1041, 3291, 1423, 3710, 18),
    },
    {
      id: "body-row3-capa39",
      style: bodyBox(259, 4072, 598, 4297, 19),
    },
    {
      id: "body-row3-capa40",
      style: bodyBox(335, 3766, 729, 4270, 20),
    },
    {
      id: "body-row3-capa41",
      style: bodyBox(433, 3378, 1432, 4680, 22),
    },
    {
      id: "body-row3-capa42",
      style: bodyBox(542, 3477, 1347, 4542, 26, {
        height: bodyPctY(4542 - 3477),
      }),
    },
    {
      id: "body-row3-left-bg",
      style: row3LeftClipBox(272, 3253, 1363, 4592, 10),
    },
    {
      id: "body-row3-left-character",
      style: row3LeftClipBox(615, 3515, 1440, 4394, 11),
    },
    {
      id: "body-row3-left-planta7",
      style: row3LeftClipBox(356, 3359, 849, 3859, 12),
    },
    {
      id: "body-row3-left-planta4",
      style: row3LeftClipBox(757, 4207, 1183, 4484, 13),
    },
    {
      id: "body-row3-left-roca2",
      style: row3LeftClipBox(887, 4322, 1333, 4723, 14),
    },
    {
      id: "body-row3-left-planta3",
      style: row3LeftClipBox(176, 3984, 1005, 4440, 15),
    },
    {
      id: "body-row3-left-roca",
      style: row3LeftClipBox(462, 4201, 798, 4449, 16),
    },
    {
      id: "body-row3-left-planta5",
      style: row3LeftClipBox(82, 4273, 1332, 4664, 17),
    },
    {
      id: "body-row3-capa44",
      style: bodyBox(1858, 3594, 2961, 3792, 20),
    },
    {
      id: "body-row3-title",
      style: bodyBox(1921, 3693, 2812, 3746, 24),
    },
    {
      id: "body-row3-description",
      style: bodyBox(1923, 3813, 2894, 4084, 23),
    },
    {
      id: "body-row3-capa48",
      style: bodyBox(2035, 4145, 2959, 4318, 21),
    },
    {
      id: "body-row3-capa49",
      style: bodyBox(1878, 4164, 2293, 4464, 21),
    },
    {
      id: "body-row3-capa45",
      style: bodyBox(2652, 4149, 2986, 4461, 22),
    },
    {
      id: "body-row4-capa66",
      style: bodyBox(1250, 5201, 1993, 5330, 30),
    },
    {
      id: "body-row4-capa65",
      style: bodyBox(1044, 5374, 2217, 5725, 31),
    },
    {
      id: "body-row4-capa64",
      style: bodyBox(33, 5179, 2675, 6488, 32),
    },
    {
      id: "body-row4-capa68",
      style: bodyBox(1589, 5187, 3323, 6380, 33),
    },
    {
      id: "body-row4-capa70",
      style: bodyBox(704, 5773, 3008, 6310, 34),
    },
    {
      id: "body-row4-ampliacion",
      style: bodyBox(-1, 6220, 3288, 6937, 35),
    },
    {
      id: "body-row4-chase2",
      style: bodyBox(651, 5674, 1151, 6544, 36),
    },
    {
      id: "body-row4-skye2",
      style: bodyBox(910, 5847, 1554, 6549, 37),
    },
    {
      id: "body-row4-rubble2",
      style: bodyBox(2098, 6106, 2657, 6531, 38),
    },
    {
      id: "body-row4-rex",
      style: bodyBox(1669, 5707, 2273, 6570, 39),
    },
    {
      id: "body-row4-marshall2",
      style: bodyBox(1244, 5545, 1934, 6608, 40),
    },
    {
      id: "body-row4-rhubarb",
      style: bodyBox(2727, 5416, 3231, 6277, 41),
    },
    {
      id: "body-row4-timmyrex",
      style: bodyBox(-310, 5115, 766, 6362, 42),
    },
    {
      id: "body-row4-capa31",
      style: bodyBox(1044, 5638, 1180, 5710, 43),
    },
    {
      id: "body-row4-capa29",
      style: bodyBox(1117, 6401, 2157, 6815, 44),
    },
    {
      id: "body-row4-capa63",
      style: bodyBox(1167, 6418, 2115, 6765, 45),
    },
    {
      id: "body-row4-planta6-copia",
      style: bodyBox(2751, 5572, 3390, 6418, 46),
    },
    {
      id: "body-row4-planta5-copia",
      style: bodyBox(2757, 5063, 4634, 6437, 47),
    },
    {
      id: "body-row4-planta5-copia2",
      style: bodyBox(2343, 5869, 4402, 6891, 48),
    },
    {
      id: "body-row4-planta3-copia",
      style: bodyBox(2565, 6036, 3785, 6686, 49),
    },
    {
      id: "body-row4-planta7",
      style: bodyBox(-428, 6040, 858, 7005, 50),
    },
    {
      id: "body-row4-planta6",
      style: bodyBox(-124, 5516, 515, 6361, 51),
    },
    {
      id: "body-row4-planta5",
      style: bodyBox(-1286, 5150, 591, 6523, 52),
    },
    {
      id: "body-row4-planta",
      style: bodyBox(-403, 6010, 603, 6864, 53),
    },
    {
      id: "body-row4-capa62",
      style: bodyBox(144, 6413, 3144, 6849, 54),
    },
    {
      id: "body-row4-capa59",
      style: bodyBox(0, 6398, 3287, 6923, 55),
    },
    {
      id: "body-row4-capa60",
      style: bodyBox(2727, 6225, 3602, 6997, 56),
    },
    {
      id: "body-row4-capa61",
      style: bodyBox(-229, 6320, 632, 7084, 57),
    },
    {
      id: "body-row4-capa34",
      style: bodyBox(0, 4141, 3288, 7152, 58),
    },
  ];

const TAIL_START_Y = 209;
const TAIL_END_Y = 9891;
const TAIL_SCENE_BOUNDS: SceneBounds = {
  width: 3287,
  height: TAIL_END_Y - TAIL_START_Y,
  ratio: 3287 / (TAIL_END_Y - TAIL_START_Y),
};

const tailPctX = (value: number): string => `${(value / TAIL_SCENE_BOUNDS.width) * 100}%`;
const tailPctY = (value: number): string => `${(value / TAIL_SCENE_BOUNDS.height) * 100}%`;

const tailBox = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  zIndex: number,
  extra: RawSpriteStyle = {}
): RawSpriteStyle => {
  void y2;

  return {
    left: tailPctX(x1),
    top: tailPctY(y1 - TAIL_START_Y),
    width: tailPctX(x2 - x1),
    zIndex,
    ...extra,
  };
};

const tailSpriteDefinitions: RawSpriteDefinition[] = [

    {
      id: "tail-row1",
      style: tailBox(339, 209, 2979, 1797, 10),
    },
    {
      id: "tail-row2",
      style: tailBox(0, 2004, 3287, 3948, 11),
    },
    {
      id: "tail-row3",
      style: tailBox(-293, 3726, 3510, 6665, 12),
    },
    {
      id: "tail-row4",
      style: tailBox(410, 7023, 2878, 8326, 13),
    },
    {
      id: "tail-row5",
      style: tailBox(-298, 8693, 3747, 9891, 14),
    },
  ];

const createLayoutMap = (definitions: readonly RawSpriteDefinition[]): SpriteLayoutMap => {
  const map: SpriteLayoutMap = {};

  definitions.forEach(({ id, style }) => {
    const wrapperStyle: CSSProperties = {};
    const imageStyle: CSSProperties = {};

    Object.entries(style).forEach(([key, value]) => {
      if (key === "objectFit") {
        imageStyle.objectFit = String(value) as CSSProperties["objectFit"];
        return;
      }

      (wrapperStyle as Record<string, StylePrimitive>)[key] = value;

      if (key === "height") {
        imageStyle.height = "100%";
      }
    });

    map[id] =
      Object.keys(imageStyle).length > 0
        ? {
            wrapperStyle,
            imageStyle,
          }
        : {
            wrapperStyle,
          };
  });

  return map;
};

export const heroSceneRatio = HERO_SCENE_BOUNDS.ratio;
export const bodySceneRatio = BODY_SCENE_BOUNDS.ratio;
export const tailSceneRatio = TAIL_SCENE_BOUNDS.ratio;

export const heroSpriteLayoutMap = createLayoutMap(heroSpriteDefinitions);
export const bodySpriteLayoutMap = createLayoutMap(bodySpriteDefinitions);
export const tailSpriteLayoutMap = createLayoutMap(tailSpriteDefinitions);

export const spriteLayoutMap: SpriteLayoutMap = {
  ...heroSpriteLayoutMap,
  ...bodySpriteLayoutMap,
  ...tailSpriteLayoutMap,
};