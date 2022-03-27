import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './SectionFour.module.css';


function SectionFour() {

    return (
        <div className="container">

            <div className="row mt-5">

                <div className="col-xl-5  col-lg-5 col-md-6">

                    <div className="mb-3">

                        <h4 className={styles.head_sec}> Our App Features </h4>

                        <p className={styles.pstyle}> Cras accumsan pretium dignissim. Curabitur a orci lorem.
                            Phasellus tempor dolor vel odio efficitur ac sollicitudin.</p>
                    </div>

                    <div>
                        <div className={styles.featuresSec}>
                            <span className={styles.myStyle} >
                                <FontAwesomeIcon icon="bell" className={styles.iconStyle1} />
                            </span>
                            <span style={{ fontWeight: "bold" }}> instant Notification</span>
                        </div>


                        <p className={styles.pstyle}> Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                            scelerisque nisi urna. Duis rutrum non risus in imperdiet.</p>

                        <div className={styles.featuresSec}>
                            <span className={styles.myStyle}>
                                <FontAwesomeIcon icon="user" className={styles.iconStyle2} />
                            </span>
                            <span style={{ fontWeight: "bold" }}> User Friendly</span>
                        </div>

                        <p className={styles.pstyle}> Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                            scelerisque nisi urna. Duis rutrum non risus in imperdiet.</p>

                        <div className={styles.featuresSec}>
                            <span className={styles.myStyle}>
                                <FontAwesomeIcon icon="thumbs-up" className={styles.iconStyle3} />
                            </span>
                            <span style={{ fontWeight: "bold" }}> Secure & Reliable </span>
                        </div>

                        <p className={styles.pstyle}> Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                            scelerisque nisi urna. Duis rutrum non risus in imperdiet.</p>

                    </div>

                </div>

                <div className={`col-xl-6  col-lg-6 col-md-6 offset-lg-1 ${styles.img_sec} `} >
                    <img src="./3.png" alt="" className={`img-fluid `} />
                </div>

            </div>
        </div >
    )

}

export default SectionFour;