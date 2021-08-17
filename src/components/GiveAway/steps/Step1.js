import Step1Option from "./Step1Option"

export default function Step1() {
    return (
        <form className="step1">
                    {/* <label>
            <input type="radio"/>
            <span></span>
            1
        </label>
        <label>
            <input type="radio" />
            <span></span>
            2
        </label> */}
            <Step1Option label="Clothes for reuse" />
            <Step1Option label="Clothes to throw away" />
            <Step1Option label="Toys" />
            <Step1Option label="Books" />
            <Step1Option label="Other" />
        </form>
    )
}
