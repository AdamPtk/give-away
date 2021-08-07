import facebook from "../assets/Facebook.svg"
import instagram from "../assets/Instagram.svg"

const HomeFooter = () => {
    return (
        <section id="home-footer">
            <div></div>
            <p>Copyright</p>
            <div className="images">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
            </div>
        </section>
    );
}

export default HomeFooter;