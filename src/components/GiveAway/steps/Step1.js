import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

import Step1Option from "./Step1Option"

export default function Step1() {
    const {handleChange} = useContext(GiveAwayContext);
    return (
        <form className="step1">
            <Step1Option label="Clothes for reuse" id="clothes-for-reuse" name="category" handleChange={handleChange} />
            <Step1Option label="Clothes to throw away" id="clothes-to-throw-away" name="category" handleChange={handleChange} />
            <Step1Option label="Toys" id="toys" name="category" handleChange={handleChange} />
            <Step1Option label="Books" id="books" name="category" handleChange={handleChange} />
            <Step1Option label="Other" id="other" name="category" handleChange={handleChange} />
        </form>
    )
}
