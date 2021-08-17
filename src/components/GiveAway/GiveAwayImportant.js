export default function GiveAwayImportant({step}) {
    const messageSwitch = (step) => {
        switch (step) {
            case 1:
                return "Select category of your things. Thanks to that we will know who need them the most.";
            case 2:
                return "Pack all your things into 60 liter bags.";
            case 3:
                return (
                    "If you know who you would like to help - you can search the name of organization. " +
                    "Otherwise you can filter organizations by location or their main charity target."
                )
            case 4:
                return "Type address and time of your package pickup:";
            default:
                return "Select category of your things. Thanks to that we will know who need them the most.";
        }
    }
    return (
        <section className="important">
            <div className="container">
                <h1 style={{margin: 0}}>Important!</h1>
                <p>{messageSwitch(step)}</p>
            </div>
        </section>
    )
}
