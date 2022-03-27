import JustForStyle from "./JustForStyle";
import styles from './SectionTwo.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SectionTwo() {

    return (
        <div className='container'>

            <div className={`row text-center mb-5 ${styles.row_1}`}>

                <div className={`col-xl-3 col-md-3 col-sm-9 mx-auto pt-5  ${styles.description_box} `} >

                    <div className={styles.circle_color_1} >
                        <FontAwesomeIcon icon="drafting-compass" className={styles.iconStyle1} />
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <h4> Awesome Design </h4>
                    </div>

                    <div style={{ color: "#666666", lineHeight: "2" }}>

                        <p className={styles.pstyle}> Lorem ipsum dolor sit amet into
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incid.
                        </p>

                    </div>

                </div>

                <div className={`col-xl-3 col-md-3 col-sm-9 mx-auto pt-5  ${styles.description_box} `}>

                    <div className={styles.circle_color_2}>
                        <FontAwesomeIcon icon="fa-edit" className={styles.iconStyle2} />
                    </div>

                    <div style={{ marginTop: "20px" }}> <h4> Easy to edit </h4> </div>

                    <div style={{ color: "#666666", lineHeight: "2" }}>
                        <p className={styles.pstyle}> Lorem ipsum dolor sit amet into
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incid.
                        </p>
                    </div>

                </div>

                <div className={`col-xl-3 col-md-3 col-sm-9 mx-auto pt-5  ${styles.description_box} `}>

                    <div className={styles.circle_color_3} >
                        <FontAwesomeIcon icon="shield-halved" className={styles.iconStyle3} />
                    </div>

                    <div style={{ marginTop: "20px" }}> <h4> Fully Secured </h4> </div>
                    <div style={{ color: "#666666", lineHeight: "2" }}>
                        <p className={styles.pstyle}> Lorem ipsum dolor sit amet into
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incid.
                        </p>
                    </div>
                </div>

            </div>

            <div className={`row  ${styles.style_sec} `}>
                <JustForStyle style={{ margin: "auto" }} className="mx-auto">
                    <div className="row mt-4 text-center mx-auto">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <FontAwesomeIcon icon='heart' className={styles.iconstyle} />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <FontAwesomeIcon icon='music' className={styles.iconstyle} />
                        </div>
                    </div>

                    <div className="row mt-1 text-center mx-auto">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <FontAwesomeIcon icon='camera' className={styles.iconstyle} />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <FontAwesomeIcon icon='poo-storm' className={styles.iconstyle} />
                        </div>
                    </div>
                </JustForStyle>
            </div>
        </div>
    )
}

export default SectionTwo;