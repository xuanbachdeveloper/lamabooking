import "./featured.css";

const Featured = () => {

  return (
    <div className="featured">
        <>
          <div className="featuredItem">
            <img
              src="image.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>abc</h1>
              <h2> properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="image.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>abc</h1>
              <h2> properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="image.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hanoi</h1>
              <h2> properties</h2>
            </div>
          </div>
        </>
    </div>
  );
};

export default Featured;
