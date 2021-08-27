import SummaryLine from "./SummaryLine";

export default function SummaryCol1() {
    return (
        <div className="col">
            <h2>Pickup address</h2>
            <div>
                <SummaryLine label="Date" text="text"/>
                <SummaryLine label="Time" text="text"/>
                <SummaryLine label="Comment" text="text"/>
            </div>
        </div>
    )
}