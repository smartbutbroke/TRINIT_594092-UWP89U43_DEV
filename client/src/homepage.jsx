import React from "react";
import "./styles.css";
import create from "./form";

function Home(){
    return(
        <body>
          <h1 align="center">AGRI-CONNECT</h1>
            <ul><h2>ABOUT US :</h2>
                <li>A social media platforms to help farmers and farming enthusiasts.</li>
                <li>We connect farmers from all over India with the latest advancements in agricultural technology.</li>
                <li>we suggest crops for farmers to grow based on their
                specific field and family information.</li>
                <li>Provide information on available schemes and programs from the central and state governments.</li>
                <li> We also provide various hybrid farming methods and technology</li>
            </ul>
                <p>
                {create()}
                </p>
        </body>
    );
}

export default Home;