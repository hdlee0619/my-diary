import { useEffect } from 'react';

// 기존의 js에서 ts로 변경되어서 type오류 발생
// 우선 any로 처리
function useOutSideClick(ref: any, callback: any) {
  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;
