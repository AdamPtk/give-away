import {useState} from "react";

import organizations from "../data/organizations.json";

import HeaderDecoration from './atoms/HeaderDecoration';
import CooperationButton from './atoms/CooperationButton';
import HomeCooperationContent from './HomeCooperationContent';

const HomeCooperation = () => {
    const getData = (orgs, id) => {
        switch(id) {
            case "organizations":
                setDescription(orgs["descriptions"]["organizations"]);
                setItems(orgs["organizations"]);
                break;
            case "foundations":
                setDescription(orgs["descriptions"]["foundations"]);
                setItems(orgs["foundations"]);
                break;
            case "donations":
                setDescription(orgs["descriptions"]["donations"]);
                setItems(orgs["donations"]);
                break;
            default:
                setDescription(orgs["descriptions"]["foundations"]);
                setItems(orgs["foundations"]);
                break;
        }
    }
    const [description, setDescription] = useState(organizations["descriptions"]["foundations"]);
    const [items, setItems] = useState(organizations["foundations"]);
    const [active, setActive] = useState("foundations");

    const handleClick = (el) => {
        getData(organizations, el);
        setActive(el);
    }

    
    return (
        <section id='home-cooperation'>
            <HeaderDecoration text1="Who we're helping?" />
            <div className="buttons">
                <CooperationButton 
                    className={active === "foundations" ? "active" : ""} 
                    setData={() => handleClick("foundations")}  
                    text="Foundations" 
                />
                <CooperationButton 
                    className={active === "organizations" ? "active" : ""} 
                    setData={() => handleClick("organizations")} 
                    text="Non-profit organizations" 
                />
                <CooperationButton 
                    className={active === "donations" ? "active" : ""} 
                    setData={() => handleClick("donations")} 
                    text="Local donations" />
            </div>
            <HomeCooperationContent description={description} items={items}/>
        </section>
    );
}

export default HomeCooperation;