import { useState, useCallback } from 'react';

// 기존의 js에서 ts로 변경되어서 type오류 발생
// 우선 any로 처리
const useInput = (initialValue: any) => {
  const [state, setState] = useState(initialValue);

  const setStateHandler = useCallback((e: any) => {
    const { name, value } = e.target;
    setState((prev: any) => ({ ...prev, [name]: value }));
  }, []);

  const reset = () => {
    setState(initialValue);
  };
  return [state, setStateHandler, reset];
};

export default useInput;
