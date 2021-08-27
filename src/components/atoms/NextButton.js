import {useContext} from "react";
import {GiveAwayContext} from "../GiveAway/GiveAwayMain";

export default function NextButton() {
    const {handleNextStep, step} = useContext(GiveAwayContext);

    const handleClick = () => {
        if (typeof handleNextStep === "function") {
            handleNextStep();
        }
    }

    return (
        <button onClick={handleClick}>{step === 5 ? "Confirm" : "Next"}</button>
    )
}
