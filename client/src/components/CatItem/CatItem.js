import React from 'react';
import './CatItem.scss'
import paw from '../../assets/paw.svg';
import info from '../../assets/info-rounded.svg'
import {Skeleton} from "@mui/material";
import {Link} from "react-router-dom";

const CatItem = ({src, alt, name, description, chippedInfo, _id, trash}) => {
    return (
        <li className="cat_card" key={_id}>
            <Link to={`/cat/${_id}`}>
                {src === undefined ? (
                    <Skeleton variant="rect" style={{borderRadius: '20px'}} width={305} height={295}/>
                ) : (
                    <>
                        {src && <img className="cat_card-icon" src={src} alt={alt}/>}
                    </>
                )}
                <div className="cat_card-wrapper">
                    <div className="cat_card-name">
                        <p>{name}</p>
                    </div>
                    <div className="cat_card-description">
                        <img src={paw} alt="paw"/>
                        <p>{description}</p>
                    </div>
                    <div className="cat_card-chipped">
                        <img src={info} alt="info"/>
                        <p>{chippedInfo}</p>
                    </div>
                    <div className="cat_card-trash">{trash}</div>
                </div>
            </Link>
        </li>
    );
};

export default CatItem;