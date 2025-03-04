
import { useEffect, RefObject } from 'react';

type Handler = (event: MouseEvent) => void;

/**
 * Custom hook that handles click outside of a specified element
 * @param ref Reference to the element to detect clicks outside of
 * @param handler Function to call when a click outside is detected
 * @param enabled Optional flag to enable/disable the click outside detection (defaults to true)
 */
const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  enabled: boolean = true
): void => {
  useEffect(() => {
    if (!enabled) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, enabled]);
};

export default useClickOutside;
