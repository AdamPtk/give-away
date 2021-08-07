import HeaderDecoration from "./atoms/HeaderDecoration";

const HomeContactForm = () => {
    return (
        <div className="form-section">
            <HeaderDecoration text1="Contact us!" />
            <form>
                <div className="user-data">
                    <label>
                        Type your name
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="John" 
                        />
                    </label>
                    <label>
                        Type your email
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="xyz@abc.com"
                        />
                    </label>
                </div>
                <div className="user-message">
                    <label htmlFor="message">Type your message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        cols="40" 
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                </div>
                <input id="submit" type="submit" value="Send" />
            </form>
        </div>
    );
}

export default HomeContactForm;