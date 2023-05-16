import React from 'react';
import './OurCats.scss'
import CatsGallery from "../CatsGallery/CatsGallery"
import {Link} from "react-router-dom";

const OurCats = () => {
    return (
        <article>
            <h2>Наші хвости</h2>
            <CatsGallery limit={4} />
            <Link to="/tails" className={'cats_cards-link'}>Переглянути усіх</Link>
        </article>
    );
};

export default OurCats;