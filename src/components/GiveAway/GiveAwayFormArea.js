import NextButton from "../atoms/NextButton";
import BackButton from "../atoms/BackButton";

export default function GiveAwayFormArea({step}) {
    const headerSwitch = (step) => {
        switch (step) {
            case 1:
                return "Select what you want to give away:"
            case 2:
                return "Number of bags to give away:";
            case 3:
                return "Location:";
            case 4:
                return "Type address and time of your package pickup:";
            default:
                return "Select what you want to give away:";
        }
    }

    return (
        <section className="form-area">
            <div className="container">
                <p>Step {step}/4</p>
                <div className="forms">
                    <h1>{headerSwitch(step)}</h1>
                </div>
                <div className="buttons">
                    {step === 1 ? null : <BackButton />}
                    <NextButton />
                </div>
            </div>
        </section>
    )
}
