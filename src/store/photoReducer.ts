import { RootState } from ".";
import { IPhoto } from "../components/Photo/type";

export interface IListPhotoStore {
  photo: IPhoto | undefined;
}
const defaultState: IListPhotoStore = {
  photo: undefined,
};

type action = {
  type: string;
  photo: IPhoto;
};

const GET_PHOTO = "GET_PHOTO";

export const photoReducer = (
  state = defaultState,
  action: action
): IListPhotoStore => {
  switch (action.type) {
    case GET_PHOTO:
      return { ...state, photo: action.photo };
    default:
      return state;
  }
};

// Dispatch actions

export const getPhotoAction = (photo: IPhoto) => ({ type: GET_PHOTO, photo });

// Selectors

export const photoSelector = (state: RootState): IPhoto | undefined =>
  state.photoReducer.photo;
