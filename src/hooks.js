import { useEffect } from 'react';

export const useOnOutsideClick = (ref, handler) => {
    useEffect(() => {
        const listener = ev => {
            if (!ref.current || ref.current.contains(ev.target)) {
                return;
            }
            handler(ev)
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener)
        }
    },
        [ref, handler]
    )
}