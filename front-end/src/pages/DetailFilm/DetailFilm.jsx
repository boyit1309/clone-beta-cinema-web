import React from "react";
import "./DetailFilm.scss";
import { useSelector } from "react-redux";
import AvatarFilm from "../../component/AvatarFilm/AvatarFilm";

const DetailFilm = () => {
  const { detailFilm } = useSelector((state) => state.appReducer);
  console.log(detailFilm);
  return (
    <div className="wrapper-detail-film">
      <div className="header text-bold">
        Trang chủ &gt; <span> {detailFilm.name}</span>
      </div>
      <div className="content">
        <div>
          <AvatarFilm
            image={detailFilm.img}
            width={258}
            height={408}
            borderRadius={20}
          />
        </div>
        <div className="desc-film">
          <div className="header-desc">
            <h1>{detailFilm.name}</h1>
            <p>{detailFilm.description}</p>
          </div>
          <div className="content-desc">
            <div className="content-item">
              <div className="left text-bold">ĐẠO DIỄN: </div>
              <div className="right">{detailFilm.director}</div>
            </div>
            <div className="content-item">
              <div className="left text-bold">DIỄN VIÊN: </div>
              <div className="right">{detailFilm.actor}</div>
            </div>
            <div className="content-item">
              <div className="left text-bold">THỂ LOẠI </div>
              <div className="right">{detailFilm.category}</div>
            </div>
            <div className="content-item">
              <div className="left text-bold">THỜI LƯỢNG: </div>
              <div className="right">{detailFilm.duration} phút</div>
            </div>
            <div className="content-item">
              <div className="left text-bold">NGÔN NGỮ: </div>
              <div className="right">{detailFilm.language}</div>
            </div>
            <div className="content-item">
              <div className="left text-bold">NGÀY KHỞI CHIẾU: </div>
              <div className="right">{detailFilm.premiereDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFilm;
