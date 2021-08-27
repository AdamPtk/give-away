import {useState, createContext} from "react";

import GiveAwayImportant from "./GiveAwayImportant";
import GiveAwayFormArea from "./GiveAwayFormArea";

export const GiveAwayContext = createContext();

export default function GiveAwayMain() {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(prev => prev + 1) 
    }

    const handlePrevStep = () => {
        setStep(prev => prev - 1) 
    }

    return (
        <section id="give-away-form">
            <GiveAwayContext.Provider value={{handleNextStep, handlePrevStep, step}}>
                {step <= 4 ? <GiveAwayImportant step={step}/> : null}
                <GiveAwayFormArea step={step}/>
            </GiveAwayContext.Provider>
        </section>
    )
}
