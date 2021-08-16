import {useContext} from "react";
import {GiveAwayContext} from "../GiveAway/GiveAwayMain";

export default function BackButton() {
    const {handlePrevStep} = useContext(GiveAwayContext);

    const handleClick = () => {
        if (typeof handlePrevStep === "function") {
            handlePrevStep();
        }
    }

    return (
        <button onClick={handleClick}>Back</button>
    )
}