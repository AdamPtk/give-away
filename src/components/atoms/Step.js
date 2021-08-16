export default function Step({nr, text}) {
    return (
        <div className="square">
            <div className="box">
                <p style={{fontSize: 32}}>{nr}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
