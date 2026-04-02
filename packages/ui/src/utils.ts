import { isFunction, isObject } from "@oviirup/utils/assertions";
import { twJoin, twMerge } from "tailwind-merge";
import { createTV, type VariantProps } from "tailwind-variants/lite";

/** Creates a formatted className from given arguments */
export function cn(...args: any[]) {
  return twMerge(twJoin(...args));
}

export const tv = createTV();
export namespace tv {
  export type Props<T extends (...args: any[]) => any> = VariantProps<T>;
}

/** Combines multiple React refs into a single ref callback function */
export function composeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (el) => {
    const cleanups = refs
      .map((ref) => {
        if (isFunction(ref)) return ref(el);
        if (isObject(ref)) ref.current = el;
        return null;
      })
      .filter(isFunction);
    // run cleanup functions if any were provided
    return () => {
      if (cleanups.length === 0) return;
      for (const cleanup of cleanups) cleanup();
    };
  };
}

/** Combines multiple event handlers in one */
export function composeEventHandlers(
  original: React.EventHandler<any> | undefined,
  custom: React.EventHandler<any> | undefined,
  checkIsAllowed = true,
) {
  return (event: any) => {
    original?.(event);
    const isAllowed = !checkIsAllowed || !event?.defaultPrevented;
    if (isAllowed) custom?.(event);
  };
}

/** Applies a React SetStateAction to a previous state value */
export function resolveStateAction<T>(
  action: React.SetStateAction<T>,
  prev: T,
) {
  return isFunction(action) ? action(prev) : action;
}
