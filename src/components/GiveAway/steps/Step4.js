import Step4Input from "./Step4Input";
import Step4Textarea from "./Step4Textarea";

export default function Step4() {
    return (
        <div className="step4">
            <div className="col">
                <h2>Pickup address</h2>
                <form>
                    <Step4Input label="Street" type="text" name="street"/>
                    <Step4Input label="City" type="text" name="city"/>
                    <Step4Input label="ZIP Code" type="text" name="zipCode"/>
                    <Step4Input label="Phone" type="tel" name="phone"/>
                </form>
            </div>
            <div className="col">
                <h2>Pickup date</h2>
                <form>
                    <Step4Input label="Date" type="date" name="date"/>
                    <Step4Input label="Time" type="time" name="time"/>
                    <Step4Textarea label="Comment" name="comment"/>   
                </form>
            </div>
        </div>
    )
}