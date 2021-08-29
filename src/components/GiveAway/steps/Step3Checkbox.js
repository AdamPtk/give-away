import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

export default function Step3Checkbox({label, id, handleChange, name}) {
    const {formData} = useContext(GiveAwayContext);

    return (
        <label>
            <input type="checkbox" name={name} id={id} value={id} onChange={handleChange} checked={formData[name].includes(id)} />
            <span>{label}</span>
        </label>
    )
}
