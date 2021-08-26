import {useState} from "react";
import Step3Select from "./Step3Select";
import Step3Checkbox from "./Step3Checkbox";
import Step3Input from "./Step3Input";

export default function Step3() {
    const [city, setCity] = useState("select")
    return (
        <div className="step3">
            <Step3Select select={city} onSelect={setCity} />
            <h2>Who do you want to help?</h2>
            <form className="help-groups">
                <Step3Checkbox label="children" />
                <Step3Checkbox label="single mothers" />
                <Step3Checkbox label="homeless" />
                <Step3Checkbox label="disabled" />
                <Step3Checkbox label="elders" />
            </form>
            <h2>Type the name of specific organization (optional)</h2>
            <Step3Input />
        </div>
    )
}