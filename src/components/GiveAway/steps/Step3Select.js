import {useState} from "react";
import arrow from "../../../assets/Icon-Arrow-Down.svg";


export default function Step3Select({select, onSelect}) {
    const [isActive, setIsActive] = useState(false);
    const [rotate, setRotate] = useState(0);

    const cities = ["Poznań", "Warszawa", "Wrocław", "Kraków", "Katowice"];

    return (
        <div className="select">
            <div 
                className="select-btn" 
                onClick={e => {
                    setIsActive(!isActive)
                    rotate === 0 ? setRotate(1) : setRotate(0);
                }}
            >
                <span>{select}</span>
                <img src={arrow} alt="arrow" rotate={rotate}/>
            </div>
            {isActive && (
                <div className="select-content">
                    {cities.map((city, i) => {
                        return <div 
                                    key={i}
                                    className="select-item"
                                    onClick={e => {
                                        onSelect(city);
                                        setIsActive(!isActive);
                                        rotate === 0 ? setRotate(1) : setRotate(0);
                                    }}
                                >
                                    {city}
                                </div>
                    })}
                </div>
            )}
        </div>
    )
}
