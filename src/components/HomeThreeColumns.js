import HomeThreeColumnsCol from "./HomeThreeColumnsCol";

const HomeThreeColumns = () => {
    return (
        <section id='home-three-columns'>
            <HomeThreeColumnsCol count={100} item={"bags collected"} />
            <HomeThreeColumnsCol count={15} item={"organizations supported"} />
            <HomeThreeColumnsCol count={17} item={"charity events organized"} />
        </section>
    );
}

export default HomeThreeColumns;