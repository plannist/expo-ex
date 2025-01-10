export {}
declare global {
    const useEffect: typeof import('react')['useEffect'];
    const useState: typeof import('react')['useState'];
    const useMemo: typeof import('react')['useMemo'] ;
    const useRef: typeof import('react')['useRef'];
}