import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPhoto } from "../../store/asyncActions/photo";
import { photoSelector } from "../../store/photoReducer";
import s from "./Photo.module.scss";

export const Photo = () => {
  const photoId = useParams<string>();
  const dispatch = useDispatch();
  const photo = useSelector(photoSelector);

  useEffect(() => {
    if (!photoId.id) return;
    dispatch(fetchPhoto(photoId.id));
  }, []);
  const renderPhoto = () => {
    if (!photo) return;
    if (photo.id !== photoId.id) return;
    return (
      <div className={s.blockPhoto}>
        <span>
          Author: {photo.user.first_name} {photo.user.last_name}
        </span>
        <span>
          {photo.description
            ? `Description: ${photo.description}`
            : "No description"}
        </span>
        <img src={photo.urls.full} />
      </div>
    );
  };
  return <>{renderPhoto()}</>;
};
