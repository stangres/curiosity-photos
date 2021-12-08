import { useEffect, useReducer } from "react";

enum Actions {
  INIT = "INIT",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

interface FetchAction {
  type: Actions;
  payload?: any;
}

export interface FetchState {
  isLoading: boolean;
  isError: boolean;
  data: any;
}

const dataFetchReducer = (state: FetchState, action: FetchAction) => {
  switch (action.type) {
    case Actions.INIT:
      return { ...state, isLoading: true, isError: false };
    case Actions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case Actions.FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error("Not implemented action");
  }
};

export function useFetch<R>(
  fetcher: () => Promise<R> | R | undefined,
  initialData: R
): FetchState {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: Actions.INIT });
      try {
        const result = await fetcher();
        if (!didCancel) {
          dispatch({ type: Actions.SUCCESS, payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: Actions.FAILURE });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [fetcher]);

  return state;
}
