import React, { useState } from "react";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import "./ModalChooseSchedule.scss";
import { useDispatch } from "react-redux";
import { setDateMovie } from "../../../redux/slices/appSlice";
const dataHeader = [
    {
        id: 1,
        title: "14/12 - T4",
    },
    {
        id: 2,
        title: "15/12 - T5",
    },
    {
        id: 3,
        title: "16/12 - T6",
    },
    {
        id: 4,
        title: "17/12 - T7",
    },
];

const ModalChooseSchedule = () => {
    const dispatch = useDispatch();
    const renderContent = () => {
        switch (currentIndex) {
            case 0:
                return <Day1 />;
            case 1:
                return <Day2 />;
            default:
                return;
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="modal-choose-schedule-page">
            <div className="name-theater">Rạp Beta Bắc Giang</div>
            <div className="header-mcs">
                {dataHeader.map((data, index) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrentIndex(index);
                                dispatch(setDateMovie(data.title));
                            }}
                            key={index}
                            className={`button-options ${
                                index === currentIndex ? "active" : ""
                            }`}
                        >
                            {data.title}
                        </div>
                    );
                })}
            </div>
            <div className="tab-content">{renderContent()}</div>
        </div>
    );
};

export default ModalChooseSchedule;
