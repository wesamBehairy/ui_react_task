import styles from './SectionOne.module.css';
import style from './SectionFive.module.css';

function SectionFive() {

    const btn_sec = {
        borderRaduis: "20%",
        background: "#FFf",
        color: "#FF4363"
    }

    return (

        <div className="container-fluid" style={{ backgroundColor: "#FF4363", position: "relative" }}>

            <div className="row mt-5" >

                <div className={`col-lg-5  col-md-6 offset-lg-1  ${style.img_sec} `}>
                    <img src="./4.png" alt="" className="img-fluid" width={450} />
                </div>

                <div className={`col-lg-5  col-md-6  ${style.desc_sec}`}>

                    <div>
                        <h4 className={style.head_sec}> Get Your App for Next Way. </h4>

                        <p style={{ color: "white", marginBottom: "30px" }}>
                            In consequat, quam id sodales hendrerit, eros mi molestie leo an
                            lacinia risus neque tristique augue. Proin tempus urna vel congue
                            elementum. Vestibulum euismod accumsan.
                        </p>
                    </div>

                    <div>
                        <button className="btn" style={btn_sec}> Learn More</button>
                    </div>

                </div>

            </div>


            <div className={styles.custom_shape_divider_bottom}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className={styles.shape_fill}></path>
                </svg>
            </div>

        </div>
    )

}

export default SectionFive;