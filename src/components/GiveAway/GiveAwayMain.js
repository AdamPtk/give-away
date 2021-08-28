import {useState, createContext} from "react";

import GiveAwayImportant from "./GiveAwayImportant";
import GiveAwayFormArea from "./GiveAwayFormArea";

import formObj from "../../data/form_obj";

export const GiveAwayContext = createContext();

export default function GiveAwayMain() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(formObj);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleChangeSel = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const handleChangeCheck = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: [...prev, value]
        }))
    }

    const handleNextStep = () => {
        setStep(prev => prev + 1)
    }

    const handlePrevStep = () => {
        setStep(prev => prev - 1)
    }

    return (
        <section id="give-away-form">
            <GiveAwayContext.Provider value={{handleNextStep, handlePrevStep, step, formData, handleChange, handleChangeSel, handleChangeCheck}}>
                {step <= 4 ? <GiveAwayImportant step={step}/> : null}
                <GiveAwayFormArea step={step}/>
            </GiveAwayContext.Provider>
        </section>
    )
}