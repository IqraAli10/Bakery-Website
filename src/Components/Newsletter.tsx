const Newsletter = () => {
    return (
        <section className="other-section container">
            <div className="column-container">
                <h2>Subscribe Our Newsletter</h2>
                <p data-type="centered-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam aperiam delectus tenetur praesentium sunt accusamus voluptate dolor quis laboriosam!</p>
                <form className="form-container">
                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Email Address Here" />
                    <button className="btn1">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
