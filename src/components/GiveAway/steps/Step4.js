import Step4Input from "./Step4Input";
import Step4Textarea from "./Step4Textarea";

export default function Step4() {
    return (
        <div class="step4">
            <div className="col">
                <h2>Pickup address</h2>
                <form>
                    <Step4Input label="Street" type="text"/>
                    <Step4Input label="City" type="text"/>
                    <Step4Input label="ZIP Code" type="text"/>
                    <Step4Input label="Phone" type="tel"/>
                </form>
            </div>
            <div className="col">
                <h2>Pickup date</h2>
                <form>
                    <Step4Input label="Date" type="date"/>
                    <Step4Input label="Time" type="time"/>
                    <Step4Textarea label="Comment" />   
                </form>
            </div>
        </div>
    )
}