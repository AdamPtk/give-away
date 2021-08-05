import {useState} from "react";

import descriptions from "../data/descriptions.json";
import foundations from "../data/foundations.json";
import organizations from "../data/organizations.json";
import donations from "../data/donations.json";

import HeaderDecoration from './atoms/HeaderDecoration';
import CooperationButton from './atoms/CooperationButton';
import HomeCooperationContent from './HomeCooperationContent';

const HomeCooperation = () => {
    const [description, setDescription] = useState(descriptions.foundations);
    const [items, setItems] = useState(foundations);

    const handleClick = (e) => {
        e.preventDefault();
        setItems(e.target.value)
    }

    return (
        <section id='home-cooperation'>
            <HeaderDecoration text1="Who we're helping?" />
            <div className="buttons">
                <CooperationButton onClick={e => handleClick(e)}  text="Foundations" value={foundations} />
                <CooperationButton onClick={e => handleClick(e)} text="Non-profit organizations" value={organizations} />
                <CooperationButton onClick={e => handleClick(e)}  text="Local donations" value={donations} />
            </div>
            <HomeCooperationContent description={description} items={items}/>
        </section>
    );
}

export default HomeCooperation;