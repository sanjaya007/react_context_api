const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((value) => value.objectID !== action.payload),
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };

    case "NEXT_PAGE":
      let nextPageCount = state.page;

      if (state.page >= 49) {
        nextPageCount = 0;
      } else {
        nextPageCount = nextPageCount + 1;
      }

      return {
        ...state,
        page: nextPageCount,
      };

    case "PREV_PAGE":
      let prevPageCount = state.page;

      if (state.page <= 0) {
        prevPageCount = 49;
      } else {
        prevPageCount = prevPageCount - 1;
      }

      return {
        ...state,
        page: prevPageCount,
      };
  }
  return state;
};

export default reducer;
