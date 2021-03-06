import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

import Step3Select from "./Step3Select";
import Step3Checkbox from "./Step3Checkbox";
import Step3Input from "./Step3Input";

export default function Step3() {
    const {handleChange} = useContext(GiveAwayContext);

    return (
        <div className="step3">
            <Step3Select />
            <h2>Who do you want to help?</h2>
            <form className="help-groups">
                <Step3Checkbox label="children" id="children" name="group" handleChange={handleChange} />
                <Step3Checkbox label="single mothers" id="single-mothers" name="group" handleChange={handleChange} />
                <Step3Checkbox label="homeless" id="homeless" name="group" handleChange={handleChange} />
                <Step3Checkbox label="disabled" id="disabled" name="group" handleChange={handleChange} />
                <Step3Checkbox label="elders" id="elders" name="group" handleChange={handleChange} /> 
            </form>
            <h2>Type the name of specific organization (optional)</h2>
            <Step3Input />
        </div>
    )
}