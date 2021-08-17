export default function Step1Option({label}) {
    return (
        <label>
            <input type="radio" name="step1-answer"/>
            <span></span>
            {label}
        </label>
    )
}
