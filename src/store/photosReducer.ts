import { RootState } from ".";
import { IPhoto } from "../components/ListPhotos/type";

export interface IListPhotoStore {
  photos: IPhoto[];
  page: number;
}
const defaultState: IListPhotoStore = {
  photos: [],
  page: 1,
};

type action = {
  type: string;
  photos: IPhoto[];
  page: number;
};

const GET_PHOTOS = "GET_PHOTOS";
const INCREMENT_PAGE_NUMBER = "INCREMENT_PAGE_NUMBER";
const DECREMENT_PAGE_NUMBER = "DECREMENT_PAGE_NUMBER";

export const photosReducer = (
  state = defaultState,
  action: action
): IListPhotoStore => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: action.photos };
    case INCREMENT_PAGE_NUMBER:
      return { ...state, page: state.page + action.page };
    case DECREMENT_PAGE_NUMBER:
      return {
        ...state,
        page: state.page <= 1 ? 1 : state.page - action.page,
      };
    default:
      return state;
  }
};

// Dispatch actions
export const getPhotosAction = (photos: IPhoto[]) => ({
  type: GET_PHOTOS,
  photos,
});
export const incrementPageAction = () => ({
  type: INCREMENT_PAGE_NUMBER,
  page: 1,
});
export const decrementPageAction = () => ({
  type: DECREMENT_PAGE_NUMBER,
  page: 1,
});

// Selectors
export const photosSelector = (state: RootState): IPhoto[] =>
  state.photosReducer.photos;
export const photosPageSelector = (state: RootState): number =>
  state.photosReducer.page;
