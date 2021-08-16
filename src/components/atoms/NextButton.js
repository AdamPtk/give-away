import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

export default function NextButton() {
    const {handleNextStep} = useContext(GiveAwayContext);

    const handleClick = () => {
        if (typeof handleNextStep === "function") {
            handleNextStep();
        }
    }

    return (
        <button onClick={handleClick}>Next</button>
    )
}
