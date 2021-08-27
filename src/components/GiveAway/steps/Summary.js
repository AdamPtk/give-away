import SummaryHead from "./SummaryHead";
import SummaryCol1 from "./SummaryCol1";
import SummaryCol2 from "./SummaryCol2";

export default function Summary() {
    return (
        <div className="summary">
            <SummaryHead />
            <div className="delivery">
                <SummaryCol1 />
                <SummaryCol2 />
            </div>
        </div>
    )
}
