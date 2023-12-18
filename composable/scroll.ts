import { useEventListener, useWindowEventListener } from '@/composable/event'

export function useScrollPos(target: HTMLElement) {
  let scrollY = $ref(0)

  useEventListener(target, 'scroll', () => {
    scrollY = target.scrollTop
  })

  return $$({ scrollY })
}

export function useWindowScrollPos() {
  let scrollY = $ref(0)

  useWindowEventListener('scroll', () => {
    scrollY = window.scrollY
  })

  return $$({ scrollY })
}
