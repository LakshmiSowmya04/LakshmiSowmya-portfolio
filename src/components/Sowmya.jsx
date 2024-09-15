import React,{useState,useEffect} from "react";
import './sowmya.css'
import img from "./image.png"
const Sowmya=()=>{
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000); // delay appearance by 1 second
  }, []);

  return (
    <div className="mirichan-container">
      {visible && (
        <img
          src={img}
          alt="Miri-chan"
          className="mirichan"
          animation="appear 1s ease-in-out"
          width={10}
        />
      )}
      <div className="content">
        <h2>About Me</h2>
        <p>Hi, I'm Lakshmi Sowmya!</p>
      </div>
    </div>
  );
};

export default Sowmya;
