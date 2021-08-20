import Step1Option from "./Step1Option"

export default function Step1() {
    return (
        <form className="step1">
            <Step1Option label="Clothes for reuse" />
            <Step1Option label="Clothes to throw away" />
            <Step1Option label="Toys" />
            <Step1Option label="Books" />
            <Step1Option label="Other" />
        </form>
    )
}
