import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

export default function Step3Checkbox({label, id, handleChange}) {
    const {formData} = useContext(GiveAwayContext);

    return (
        <label>
            <input type="checkbox" name="group" id={id} value={id} onChange={handleChange} checked={formData[id]} />
            <span>{label}</span>
        </label>
    )
}
