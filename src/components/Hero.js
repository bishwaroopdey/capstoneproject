import "../assets/styles/Hero.css"
import hero from "../assets/images/hero_image.png"
function Hero() {
    return(
        <section className="hero">
            <div className="hero_left">
                <p className="hero_title">Little Lemon</p>
                <p className="hero_subtitle">Chicago</p>
                <p className="hero_text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="reserve_table_btn">Reserve a Table</button>
            </div>
            <div className="hero_right">
                <img src={hero} alt="hero image" className="hero_image" height={300}/>
            </div>
        </section>
    )
}

export default Hero;