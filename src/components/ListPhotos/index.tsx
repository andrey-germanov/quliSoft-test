import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  photosSelector,
  photosPageSelector,
  decrementPageAction,
  incrementPageAction,
} from "../../store/photosReducer";
import { fetchPhotos } from "../../store/asyncActions/photos";
import s from "./ListPhotos.module.scss";

export const ListPhotos = () => {
  const photoList = useSelector(photosSelector);
  const photoListPage = useSelector(photosPageSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos(photoListPage));
  }, [photoListPage]);

  const incrementPage = () => {
    dispatch(incrementPageAction());
  };
  const decrementPage = () => {
    dispatch(decrementPageAction());
  };
  return (
    <div className={s.wrapperListPhotos}>
      {photoList.map((photo) => {
        return (
          <Link to={`/${photo.id}`} key={photo.id}>
            <img src={photo.urls.small} alt={photo.description} />
            <div>Author: {photo.user.first_name}</div>
            <div className={s.blockDescription} title={photo.description}>
              {photo.description
                ? `Description: ${photo.description}`
                : "No description"}
            </div>
          </Link>
        );
      })}
      <div className={s.footer}>
        <button
          className={photoListPage === 1 ? "" : s.button}
          role="button"
          onClick={() => decrementPage()}
        >
          {"<<"}
        </button>
        <button
          className={s.button}
          role="button"
          onClick={() => incrementPage()}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};
