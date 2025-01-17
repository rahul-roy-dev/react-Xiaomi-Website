/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ImgFlagship = (props) => {
  const { PhonePicDesktop, PhonePicMobile, id } = props;
  return (
    <Link to={`/detail/${id}`}>
      <picture className="w-full h-[460px]">
        <source media="(min-width: 768px)" srcSet={`${PhonePicDesktop}`} />
        <img
          src={`${PhonePicMobile}`}
          alt="phone1"
          className="inset-0 object-cover w-full h-full"
        />
      </picture>
    </Link>
  );
};

export default ImgFlagship;
