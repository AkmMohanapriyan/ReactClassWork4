import Pizza from "../assets/images/Pizza.jpeg";
function AboutUs() {
  return (


    <div className="container">
      <div className="row mb-5 px-5">
        <h1 className=" heading text-center pb-5 pt-5" style={{fontFamily:"initial", fontSize:"50px"}}>About Us</h1>
        <div className="col-md-6">
        <h3 style={{fontFamily:"inherit", fontSize:"40px"}}>About Our Fast Foods</h3>
          <p className="text-justify" style={{fontFamily:"inherit", fontSize:"20px"}}>
          Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur id dui posuere blandit. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Nullare porttitor accumsan tincidunt.          </p>
        </div>
        <div className="col-md-6">
          <img src={Pizza} alt="Restaurant" className="img-fluid" style={{width:"500px", borderRadius:"10px"}}/>
        </div>
      </div>
      </div>

  );
}   

export default AboutUs;