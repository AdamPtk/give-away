import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

export default function Step1Option({label, id, handleChange, name}) {
    const {formData} = useContext(GiveAwayContext);

    return (
        <label>
            <input type="radio" onChange={handleChange} value={id} id={id} name={name} checked={formData[name] === id}/>
            <span></span>
            {label}
        </label>
    )
}
