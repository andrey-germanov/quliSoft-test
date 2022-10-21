import { Dispatch } from "react";
import { AnyAction } from "redux";
import { getPhotoAction } from "../photoReducer";

export const fetchPhoto = (id: string): any => {
  const clientId = "Zv4fHHpk4tD0wc6jRhX5QBPHsAjNjmYMZdCI-Go8SL0";
  return (dispatch: Dispatch<AnyAction>) => {
    fetch(`https://api.unsplash.com/photos/${id}/?client_id=${clientId}`)
      .then((response) => response.json())
      .then((json) => dispatch(getPhotoAction(json)));
  };
};
