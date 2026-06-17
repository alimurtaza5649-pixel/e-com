import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="text-hero">
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="btn">Shop Now</button>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">International Brands</div>
            </div>
            <div className="stat">
              <div className="stat-number">2,000+</div>
              <div className="stat-label">High-Quality Products</div>
            </div>
            <div className="stat">
              <div className="stat-number">30,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
            <img src="/hero/Vector.png" alt="image"  className="vector1"  />
            <img src="/hero/Rectangle.jpg" alt="image" />
            <img src="/hero/Vector.png" alt="image"  className="vector"  />
        </div>
      </div>
    </div>
  )
}

export default Hero
