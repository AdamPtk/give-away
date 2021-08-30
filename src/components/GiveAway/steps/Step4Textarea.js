import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

export default function Step4Textarea({label, name}) {
    const {formData, handleChange} = useContext(GiveAwayContext);

    return (
        <label className="textarea">
            {label}
            <textarea rows="3" name={name} value={formData[name]} onChange={e => handleChange(e)} />
        </label>
    )
}