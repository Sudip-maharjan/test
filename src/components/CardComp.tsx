import "./cardcomp.css";

const CardComp = () => {
  const MedicalCat = [
    {
      title: "Undergraduate",
      sub: "MBBS",
    },
    {
      title: "Postgraduate",
      sub: "MD, MS",
    },
    {
      title: "Superspeciality",
      sub: "DM, MHC",
    },
  ];
  // Category Medical
  // Title - Undergraduate
  // Subtite - MBBS
  // Title - Postgraduate
  // Subtite - MD, MS
  // Title - Superspecialty
  // Subtite - DM, MCh

  return (
    <div className="card">
      <div className="top">
        <img src="/card1.jpg" alt="image1" />
        <h4 className="cate">Medical Program</h4>
      </div>
      <div className="card-content">
        {MedicalCat.map((item, idx) => (
          <div className="mid" key={idx}>
            <h2>{item.title}</h2>
            <p>{item.sub}</p>
          </div>
        ))}
      </div>
      {/*      <div className="bot">
        <i className="one fa-light fa-0 fa-2xs"></i>
        <span>6 mins ago</span>
        <i className="fa-chisel fa-regular fa-comments two"></i>
      </div>*/}
    </div>
  );
};

export default CardComp;
