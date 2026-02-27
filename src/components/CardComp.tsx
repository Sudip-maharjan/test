import "./cardcomp.css";
const CardComp = () => {
  return (
    <div className="card">
      <div className="top">
        <img src="/img1.jpg" alt="image1" />
        <h5 className="cate">CATEGORY</h5>
      </div>
      <div className="mid">
        <h2>Title Goes Here</h2>
        <p>And Subtitle Goes Here.</p>
      </div>
      <div className="bot">
        <i className="one fa-light fa-0 fa-2xs"></i>
        <span>6 mins ago</span>
        <i className="fa-chisel fa-regular fa-comments two"></i>
      </div>
    </div>
  );
};

export default CardComp;
