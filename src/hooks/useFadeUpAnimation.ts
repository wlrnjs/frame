import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseFadeUpAnimationProps {
  targetClass?: string;
  start?: string;
  end?: string;
  duration?: number;
  stagger?: number;
  y?: number;
}

/**
 * 요소들이 스크롤 시 페이드업 애니메이션을 적용하는 커스텀 훅
 * @param {UseFadeUpAnimationProps} options - 애니메이션 옵션
 * @example
 * // 기본 사용법
 * useFadeUpAnimation();
 * 
 * // 커스텀 옵션 사용
 * useFadeUpAnimation({
 *   targetClass: 'custom-animation',
 *   start: 'top 90%',
 *   duration: 0.8,
 *   stagger: 0.2,
 *   y: 30
 * });
 */

const useFadeUpAnimation = ({
  targetClass = 'fade-up',
  start = 'top 80%',
  end = 'bottom 80%',
  duration = 1,
  stagger = 0.1,
  y = 50,
}: UseFadeUpAnimationProps = {}) => {
  useEffect(() => {
    requestAnimationFrame(() => {
      const elements = gsap.utils.toArray(`.${targetClass}`) as HTMLElement[];

      if (elements.length === 0) return;

      const animation = gsap.fromTo(
        elements,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          scrollTrigger: {
            trigger: elements[0],
            start,
            end,
            toggleActions: 'play none none reverse',
          },
        }
      );

      ScrollTrigger.refresh();

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === elements[0]) {
            trigger.kill();
          }
        });
      };
    });
  }, [targetClass, start, end, duration, stagger, y]);

  // 타입스크립트를 위한 타입 단언
  return targetClass as string;
};

export default useFadeUpAnimation;
