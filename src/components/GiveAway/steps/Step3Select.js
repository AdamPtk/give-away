import {useState} from "react";
import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";
import arrow from "../../../assets/Icon-Arrow-Down.svg";


export default function Step3Select() {
    const [isActive, setIsActive] = useState(false);
    const [rotate, setRotate] = useState(0);

    const {formData, handleChangeSel} = useContext(GiveAwayContext);

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
                <span>{formData.location}</span>
                <img src={arrow} alt="arrow" rotate={rotate}/>
            </div>
            {isActive && (
                <div className="select-content">
                    {cities.map((city, i) => {
                        return <div 
                                    key={i}
                                    className="select-item"
                                    onClick={e => {
                                        handleChangeSel("location", city);
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
