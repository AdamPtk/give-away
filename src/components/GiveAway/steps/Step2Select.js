import {useState} from "react";
import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";
import arrow from "../../../assets/Icon-Arrow-Down.svg";


export default function Step2Select() {
    const [isActive, setIsActive] = useState(false);
    const [rotate, setRotate] = useState(0);

    const {formData, handleChangeSel} = useContext(GiveAwayContext);

    const numbers = [1,2,3,4,5];
    return (
        <div className="select">
            <div
                className="select-btn" 
                onClick={e => {
                    setIsActive(!isActive)
                    rotate === 0 ? setRotate(1) : setRotate(0);
                }}
            >
                <span>{formData.bags}</span>
                <img src={arrow} alt="arrow" rotate={rotate}/>
            </div>
            {isActive && (
                <div className="select-content">
                    {numbers.map(number => {
                        return <div 
                                    key={number}
                                    className="select-item"
                                    onClick={e => {
                                        handleChangeSel("bags", number);
                                        setIsActive(!isActive);
                                        rotate === 0 ? setRotate(1) : setRotate(0);
                                    }}
                                >
                                    {number}
                                </div>
                    })}
                </div>
            )}
        </div>
    )
}
