import NextButton from "../atoms/NextButton";
import BackButton from "../atoms/BackButton";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

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

    const stepSwitch = (step) => {
        switch (step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Step4 />
            default:
                return <Step1 />
        }
    }

    return (
        <section className="form-area">
            <div className="container">
                <p>Step {step}/4</p>
                <div className="forms">
                    <h1>{headerSwitch(step)}</h1>
                    <div>{stepSwitch(step)}</div>
                </div>
                <div className="buttons">
                    {step === 1 ? null : <BackButton />}
                    <NextButton />
                </div>
            </div>
        </section>
    )
}
