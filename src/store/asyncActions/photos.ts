import { Dispatch } from "react";
import { AnyAction } from "redux";
import { getPhotosAction } from "../photosReducer";

export const fetchPhotos = (page: number): any => {
  const clientId = "Zv4fHHpk4tD0wc6jRhX5QBPHsAjNjmYMZdCI-Go8SL0";
  return (dispatch: Dispatch<AnyAction>) => {
    fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=${clientId}`)
      .then((response) => response.json())
      .then((json) => dispatch(getPhotosAction(json)));
  };
};
