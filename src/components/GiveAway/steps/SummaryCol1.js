import SummaryLine from "./SummaryLine";

export default function SummaryCol1() {
    return (
        <div className="col">
            <h2>Pickup address</h2>
            <div>
                <SummaryLine label="Street" text="text"/>
                <SummaryLine label="City" text="text"/>
                <SummaryLine label="ZIP Code" text="text"/>
                <SummaryLine label="Phone" text="tel"/>
            </div>
        </div>
    )
}
