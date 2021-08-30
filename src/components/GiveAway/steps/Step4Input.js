import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

export default function Step4Input({label, type, name}) {
    const {formData, handleChange} = useContext(GiveAwayContext);

    return (
        <label>
            {label}
            <input type={type} name={name} value={formData[name]} onChange={e => handleChange(e)} />
        </label>
    )
}
