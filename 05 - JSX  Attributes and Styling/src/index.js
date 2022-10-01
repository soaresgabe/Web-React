import React from "react";
import ReactDOM from "react-dom";

const img_1 =
  "https://i.pinimg.com/736x/20/72/d2/2072d21a028b7c3933ed954c79efe3c3.jpg";
const img_2 =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/3-the-half-spoon-1612371046.jpg?crop=1.00xw:0.502xh;0,0.108xh&resize=640:*";
const img_3 =
  "https://as1.ftcdn.net/v2/jpg/02/03/26/14/1000_F_203261440_8AuZaZHiU054vSURNrjGtpUmOC8WQPuO.jpg";

ReactDOM.render(
  <div>
    <h1 className="heading">Things I Like</h1>
    <img className="img" alt="coffee" src={img_1} />
    <img className="img" alt="cuddling" src={img_2} />
    <img className="img" alt="coding" src={img_3} />
  </div>,
  document.getElementById("root")
);
