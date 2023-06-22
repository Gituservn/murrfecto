import React, {useState} from "react";
import "./CatItem.scss";
import './FlipTransition.scss'
import paw from "../../assets/paw.svg";
import info from "../../assets/info-rounded.svg";
import {Skeleton} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";


const CatItem = ({
                     src,
                     srcBack,
                     alt,
                     name,
                     description,
                     chippedInfo,
                     id,
                     trash,
                     select,
                     gender,
                     age,
                 }) => {

    const [isCardRotate, setIsCardRotate] = useState(true);
    const navigate = useNavigate()

    const handleNavigateToCat = ()=>{
        navigate(`/cat/${id}/`)
    }
    const handleClick = () => {
        if (window.innerWidth <= 768) {
            setIsCardRotate(!isCardRotate);
        }
    };

    const handleMouseEnter = () => {
        setIsCardRotate(false);
    };

    const handleMouseLeave = () => {
        setIsCardRotate(true);
    };

    return (
        <div className="flippable-card-container"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <CSSTransition
                in={isCardRotate}
                timeout={500}
                classNames="flip"
            >
                <li
                    className={`cat_card`}
                    key={id}
                    onClick={handleClick}

                >
                    <div className="cat_card-front">
                        {select ? (
                            <div>
                                {src === undefined ? (
                                    <Skeleton
                                        variant="rect"
                                        style={{borderRadius: "20px"}}
                                        width={305}
                                        height={295}
                                    />
                                ) : (
                                    <>
                                        {src && <img className="cat_card-icon"
                                                     src={src} alt={alt}/>}
                                    </>
                                )}
                                <div className="cat_card-wrapper">
                                    <div className="cat_card-name">
                                        <p>{name}</p>
                                    </div>
                                    <div className="cat_card-description">
                                        <img src={paw} alt="paw"/>
                                        <p>
                                            {gender}, {age}
                                        </p>
                                    </div>
                                    <div className="cat_card-chipped">
                                        <img src={info} alt="info"/>
                                        <p>{chippedInfo}</p>
                                    </div>
                                    <div
                                        className="cat_card-trash">{trash}</div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                {src === undefined ? (
                                    <Skeleton
                                        variant="rect"
                                        style={{borderRadius: "20px"}}
                                        width={305}
                                        height={295}
                                    />
                                ) : (
                                    <>
                                        {src && <img className="cat_card-icon"
                                                     src={src} alt={alt}/>}
                                    </>
                                )}
                                <div className="cat_card-wrapper">
                                    <div className="cat_card-name">
                                        <p>{name}</p>
                                    </div>
                                    <div className="cat_card-description">
                                        <img src={paw} alt="paw"/>
                                        <p>
                                            {gender}, {age}
                                        </p>
                                    </div>
                                    <div className="cat_card-chipped">
                                        <img src={info} alt="info"/>
                                        <p>{chippedInfo}</p>
                                    </div>
                                    <div
                                        className="cat_card-trash">{trash}</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="cat_card-back">
                        {select ? (
                            <div className="cat_card-back__wrapper">
                                {srcBack  === undefined ? (
                                    <Skeleton
                                        variant="rect"
                                        style={{borderRadius: "20px"}}
                                        width={305}
                                        height={295}
                                    />
                                ) : (
                                    <>
                                        {srcBack && (
                                            <img className="cat_card-icon"
                                                 src={srcBack} alt={alt}/>
                                        )}
                                    </>
                                )}
                                    <button className="cat_card-link" onClick={handleNavigateToCat} >
                                         Докладніше
                                    </button>
                            </div>
                        ) : (
                            <div>
                                {srcBack === undefined ? (
                                    <Skeleton
                                        variant="rect"
                                        style={{borderRadius: "20px"}}
                                        width={305}
                                        height={295}
                                    />
                                ) : (
                                    <>
                                        {srcBack && (
                                            <img className="cat_card-icon"
                                                 src={srcBack} alt={alt}/>
                                        )}
                                    </>
                                )}
                                    <button style={{ width: '100%' }} className="cat_card-link"  onClick={handleNavigateToCat}>
                                        Докладніше
                                    </button>

                            </div>
                        )}
                    </div>
                </li>
            </CSSTransition>

        </div>
    );
};

export default CatItem;
