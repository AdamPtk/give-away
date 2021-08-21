import {useState} from "react";
import Step2Select from "./Step2Select";

export default function Step2() {
    const [number, setNumber] = useState("select");

    return (
        <div className="step2">
            <span>Number of 60l bags:</span>
            <Step2Select select={number} onSelect={setNumber}/>
        </div>
    )
}