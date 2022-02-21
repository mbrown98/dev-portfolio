import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1></h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://miro.medium.com/max/1000/1*-7GOYVGKYbcuacgVHjKtjQ@2x.jpeg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://miro.medium.com/max/1000/1*-7GOYVGKYbcuacgVHjKtjQ@2x.jpeg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>{" "}
        <div className="item">
          <img
            src="https://miro.medium.com/max/1000/1*-7GOYVGKYbcuacgVHjKtjQ@2x.jpeg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>{" "}
        <div className="item">
          <img
            src="https://miro.medium.com/max/1000/1*-7GOYVGKYbcuacgVHjKtjQ@2x.jpeg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
