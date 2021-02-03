import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, request, success, failure } from '../store/actions';
export function useDecrement() {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(decrement());
    }, [dispatch]);
}
export function useIncrement() {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(increment());
    }, [dispatch]);
}
export function useAsyncDecrement() {
    const dispatch = useDispatch();
    return useCallback(async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        dispatch(decrement());
    }, [dispatch]);
}
export function useAsyncIncrement() {
    const dispatch = useDispatch();
    return useCallback(async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        dispatch(increment());
    }, [dispatch]);
}
export function useFetchData() {
    const dispatch = useDispatch();
    return useCallback(async () => {
        dispatch(request());
        await new Promise((resolve) => setTimeout(resolve, 500));
        try {
            const res = await fetch('./index.json');
            const data = await res.json();
            dispatch(success(data.message + ' ' + new Date()));
        }
        catch (e) {
            dispatch(failure('fetch failed ' + new Date()));
        }
    }, [dispatch]);
}
