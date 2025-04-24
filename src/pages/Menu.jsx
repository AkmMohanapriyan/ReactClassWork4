import Pizza from "../assets/images/Pizza.jpeg";
import Pasta from "../assets/images/Pasta.jpeg";
import Burger from "../assets/images/Burgers.jpeg";
import Salad from "../assets/images/Salads.jpeg";

function Menu() {
    return (

        <>


            <div className="container">
                <div className="menurow row mb-5 px-5">

                    <h1 className="text-center pb-5" style={{ fontFamily: "initial", fontSize: "50px" }}>Our Menu</h1>

                    <div className="col-md-3">
                        <div class="card text-bg-dark w-100 h-100">
                            <img src={Pizza} class="card-img" alt="..." style={{ width: "100%", height: "100%" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title">PIZZA</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card text-bg-dark w-100 h-100">
                            <img src={Pasta} class="card-img" alt="..." style={{ width: "100%", height: "100%" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title">PASTA</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card text-bg-dark w-100 h-100">
                            <img src={Burger} class="card-img" alt="..." style={{ width: "100%", height: "100%" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title">BURGER</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card text-bg-dark w-100 h-100">
                            <img src={Salad} class="card-img" alt="..." style={{ width: "100%", height: "100%" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title">SALADS</h5>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pizzaRow row mb-5 px-5">

                    <div className="col-md-6">
                        <ul>
                            <li>Special Pizza</li>
                            <li>Greek Pizza</li>
                            <li>Margherita</li>
                            <li>Italian Pizza</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <img src={Pizza} class="card-img" alt="..." style={{ width: "100%", height: "100%", borderRadius:"20px" }} />
                    </div>
                </div>

                <div className="pastaRow row mb-5 px-5">

                    <div className="col-md-6">
                        <img src={Pasta} class="card-img" alt="..." style={{ width: "100%", height: "100%", borderRadius:"20px"}} />
                    </div>

                    <div className="col-md-6">

                        <ul>
                            <li>Ravioli</li>
                            <li>SpaghettiHOT</li>
                            <li>Lasagne</li>
                            <li>Fettuccine</li>
                        </ul>

                    </div>
                </div>

                <div className="burgerRow row mb-5 px-5">

                    <div className="col-md-6">
                        <ul>
                            <li>Cheeseburger</li>
                            <li>Hamburger</li>
                            <li>Chicken Burger</li>
                            <li>Mashroom Burger</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <img src={Burger} class="card-img" alt="..." style={{ width: "100%", height: "100%", borderRadius:"20px" }} />
                    </div>
                </div>

                <div className="saladRow row mb-5 px-5">

                    <div className="col-md-6">
                        <img src={Salad} class="card-img" alt="..." style={{ width: "100%", height: "100%", borderRadius:"20px" }} />
                    </div>

                    <div className="col-md-6">
                        <ul>
                            <li>Caesar Salad</li>
                            <li>Greek Salad</li>
                            <li>Chicken Salad</li>
                            <li>Chinese Salad</li>
                        </ul>
                    </div>
                </div>






            </div>



        </>

    );
}
export default Menu;