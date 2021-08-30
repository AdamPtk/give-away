import {useState, createContext} from "react";

import GiveAwayImportant from "./GiveAwayImportant";
import GiveAwayFormArea from "./GiveAwayFormArea";

import formObj from "../../data/form_obj";

export const GiveAwayContext = createContext();

export default function GiveAwayMain() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(formObj);

    const handleChange = e => {
        const {name, value, type} = e.target;
        if (type === "checkbox") {
            setFormData(prev => ({
                ...prev,
                [name]: prev[name].includes(value) ? prev[name].filter(el => el !== value) : [...prev[name], value]
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
            
        } 
    }

    const handleChangeSel = (key, selected) => {
        setFormData(prev => ({
            ...prev,
            [key]: selected
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
            <GiveAwayContext.Provider value={{handleNextStep, handlePrevStep, step, formData, handleChange, handleChangeSel}}>
                {step <= 4 ? <GiveAwayImportant step={step}/> : null}
                <GiveAwayFormArea step={step}/>
            </GiveAwayContext.Provider>
        </section>
    )
}
