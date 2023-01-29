import "../assets/styles/Highlights.css"
import item1 from "../assets/images/greek salad.png"
import item2 from "../assets/images/bruchetta.png"
import item3 from "../assets/images/lemon cake.png"
import delivery from "../assets/images/delivery.png"
function Hero() {
    return(
        <section className="highlights">
            <div className="highlights_header">
                <p className="highlight_header_title">This weeks specials!</p>
                <button className="order_online_btn">Online Menu</button>
            </div>
            <div className="item_list">
                <article className="item">
                    <img src={item1} className="item_image" alt="item image" width="100%"/>
                    <div className="item_details">
                        <div className="row">
                            <div className="column">
                                <p className="item_name">Greek Salad</p>
                            </div>
                            <div className="column">
                                <p className="item_price">$ 12.99</p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                        <div className="row">
                            <p className="order_delivery_text">Order a delivery
                                <img src={delivery} alt="delivery_logo" width="10%"/>
                            </p>
                        </div>
                    </div>
                </article>
                <article className="item">
                    <img src={item2} className="item_image" alt="item image" width="100%"/>
                    <div className="item_details">
                        <div className="row">
                            <div className="column">
                                <p className="item_name">Bruchetta</p>
                            </div>
                            <div className="column">
                                <p className="item_price">$ 5.99</p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="description">Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</p>
                        </div>
                        <div className="row">
                            <p className="order_delivery_text">Order a delivery
                                <img src={delivery} alt="delivery_logo" width="10%"/>
                            </p>
                        </div>
                    </div>
                </article>
                <article className="item">
                    <img src={item3} className="item_image" alt="item image" width="100%"/>
                    <div className="item_details">
                        <div className="row">
                            <div className="column">
                                <p className="item_name">Lemon Cake</p>
                            </div>
                            <div className="column">
                                <p className="item_price">$ 5.00</p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                        </div>
                        <div className="row">
                            <p className="order_delivery_text">Order a delivery
                                <img src={delivery} alt="delivery_logo" width="10%"/>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Hero;