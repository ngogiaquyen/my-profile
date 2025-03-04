import { useCallback } from "react";

export function useMergedRef(...refs) {
  return useCallback(
    (element) => {
      refs.forEach((ref) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(element);
          } else if (ref.current !== undefined) {
            ref.current = element;
          }
        }
      });
    },
    [refs]
  );
}
