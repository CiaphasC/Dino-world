import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useDinoWorldAnimations(
  rootRef: RefObject<HTMLElement | null>,
  prefersReducedMotion: boolean
): void {
  useLayoutEffect(() => {
    const rootElement = rootRef.current;
    if (!rootElement || prefersReducedMotion) {
      return;
    }

    let lenis: Lenis | null = null;
    let lenisTicker: ((time: number) => void) | null = null;
    let cloudTicker: (() => void) | null = null;

    const context = gsap.context(() => {
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
      });

      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      lenisTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(lenisTicker);
      gsap.ticker.lagSmoothing(0);

      const cloudsElement = rootElement.querySelector<HTMLElement>("#image-clouds");
      if (cloudsElement) {
        let bgPosX = 0;
        cloudTicker = () => {
          bgPosX -= 0.8;
          cloudsElement.style.backgroundPositionX = `${bgPosX}px`;
        };

        gsap.ticker.add(cloudTicker);

        gsap.to(cloudsElement, {
          y: "2vh",
          scale: 1.04,
          ease: "sine.inOut",
          duration: 4.5,
          yoyo: true,
          repeat: -1,
        });
      }

      const selectAll = (selector: string): HTMLElement[] =>
        Array.from(rootElement.querySelectorAll<HTMLElement>(selector));

      const characters = gsap.utils.toArray<HTMLElement>(".js-character", rootElement);
      const pawLogo = gsap.utils.toArray<HTMLElement>(".js-paw-logo", rootElement);
      const menuLeft = gsap.utils.toArray<HTMLElement>(".js-menu-left", rootElement);
      const menuRight = gsap.utils.toArray<HTMLElement>(".js-menu-right", rootElement);
      const dinoLogo = selectAll(".js-dino-logo");
      const arrows = selectAll(".js-arrow");
      const techUi = selectAll(".js-tech-ui");
      const leaves = selectAll(".js-leaf");
      const vines = selectAll(".js-vine");

      gsap.fromTo(
        characters,
        {
          y: 150,
          opacity: 0,
          scale: 0.5,
          rotation: (index: number) => (index % 2 === 0 ? -10 : 10),
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.4)",
          onComplete: () => {
            characters.forEach((character, index) => {
              gsap.to(character, {
                y: "+=12",
                rotation: "+=2",
                duration: 2 + (index % 3) * 0.4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: index * 0.1,
              });
            });

            gsap.to(techUi, {
              opacity: 0.4,
              duration: 1.5,
              yoyo: true,
              repeat: -1,
              ease: "power1.inOut",
              stagger: 0.3,
            });

            gsap.to(leaves, {
              rotation: "+=6",
              transformOrigin: "bottom center",
              duration: 3,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              stagger: 0.2,
            });

            gsap.to(vines, {
              rotation: (index: number) => (index % 2 === 0 ? 4 : -4),
              transformOrigin: "top center",
              duration: 4.5,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              stagger: 0.5,
            });
          },
        }
      );

      gsap.fromTo(
        pawLogo,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.2 }
      );

      gsap.fromTo(
        menuLeft,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
      );

      gsap.fromTo(
        menuRight,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
      );

      gsap.fromTo(
        dinoLogo,
        { scale: 0.5, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
          delay: 0.6,
          onComplete: () => {
            gsap.to(dinoLogo, {
              y: "+=6",
              duration: 2,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            });
          },
        }
      );

      gsap.fromTo(
        arrows,
        {
          opacity: 0.28,
          filter: "drop-shadow(0 0 0 rgba(89, 255, 92, 0)) brightness(1)",
        },
        {
          opacity: 1,
          filter: "drop-shadow(0 0 10px rgba(89, 255, 92, 0.95)) brightness(1.18)",
          duration: 0.62,
          stagger: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        }
      );

      const leftClusterSelectors = [
        ".char-skye-wrapper",
        ".char-chase-wrapper",
        ".char-rex-wrapper",
        ".layer-border-left-wrapper",
        ".brand-menu-left-wrapper",
        ".leaf-top-left-wrapper",
        ".leaf-bottom-left-wrapper",
        ".tech-dino-foot-wrapper",
      ].join(", ");

      const rightClusterSelectors = [
        ".char-zuma-wrapper",
        ".char-rubble-wrapper",
        ".char-marshall-wrapper",
        ".layer-border-right-wrapper",
        ".brand-menu-right-wrapper",
        ".leaf-top-right-wrapper",
        ".leaf-bottom-right-wrapper",
        ".tech-paw-wrapper",
        ".tech-meter-wrapper",
      ].join(", ");

      const topClusterSelectors = [
        ".layer-top-canopy-wrapper",
        ".layer-vine-top-wrapper",
        ".brand-paw-logo-wrapper",
      ].join(", ");

      const bottomClusterSelectors = [".layer-vine-bottom-wrapper"].join(", ");

      const centerClusterSelectors = [
        ".brand-dino-world-wrapper",
        ".discover-label-wrapper",
        ".discover-arrow-wrapper",
      ].join(", ");

      const heroScrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-shell",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1.2,
        },
      });

      heroScrollTimeline
        .to(
          ".char-trex-wrapper",
          {
            y: "25vh",
            rotation: 5,
            transformOrigin: "bottom center",
            ease: "power2.in",
            duration: 0.4,
          },
          0
        )
        .addLabel("cavePhase", 0.4)
        .to(".char-trex-wrapper", { opacity: 0, duration: 0.1 }, "cavePhase")
        .to(".hero-stage", { "--bg-scale": 1.15, ease: "power2.inOut", duration: 0.9 }, "cavePhase")
        .to(".image-clouds", { opacity: 1, ease: "power2.inOut", duration: 0.9 }, "cavePhase")
        .to(leftClusterSelectors, { x: "-80vw", opacity: 0, ease: "power2.inOut", duration: 0.9 }, "cavePhase")
        .to(rightClusterSelectors, { x: "80vw", opacity: 0, ease: "power2.inOut", duration: 0.9 }, "cavePhase")
        .to(topClusterSelectors, { y: "-60vh", opacity: 0, ease: "power2.inOut", duration: 0.9 }, "cavePhase")
        .to(bottomClusterSelectors, { y: "60vh", opacity: 0, ease: "power2.inOut", duration: 0.9 }, "cavePhase")
        .to(centerClusterSelectors, { scale: 1.2, opacity: 0, ease: "power2.inOut", duration: 0.9 }, "cavePhase")
        .to(
          ".layer-frame-cave-wrapper",
          { scale: 5, opacity: 0, ease: "power2.in", transformOrigin: "center center", duration: 0.9 },
          "cavePhase"
        );

      const bodyScrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".body-stage",
          start: "top 85%",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      bodyScrollTimeline.fromTo(".body-row3-layer-wrapper", { y: "30vh" }, { y: "0vh", ease: "none" }, 0);
      bodyScrollTimeline.fromTo(".body-row4-group", { y: "60vh" }, { y: "0vh", ease: "none" }, 0);
      bodyScrollTimeline.fromTo(
        ".body-row2-divider-wrapper",
        { y: "15vh", scale: 0.8 },
        { y: "0vh", scale: 1, ease: "power2.out" },
        0.1
      );

      gsap.fromTo(
        ".intro-char",
        { opacity: 0 },
        {
          opacity: 1,
          ease: "steps(1)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: "#intro-headline",
            start: "top 95%",
            end: "bottom 45%",
            scrub: true,
          },
        }
      );

      gsap.to(".body-row4-group", {
        y: "+=15",
        scale: 1.01,
        transformOrigin: "center bottom",
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".body-row2-divider-wrapper .scene-sprite", {
        y: "-=6",
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, rootElement);

    return () => {
      if (cloudTicker) {
        gsap.ticker.remove(cloudTicker);
      }

      if (lenisTicker) {
        gsap.ticker.remove(lenisTicker);
      }

      lenis?.destroy();
      context.revert();
    };
  }, [prefersReducedMotion, rootRef]);
}