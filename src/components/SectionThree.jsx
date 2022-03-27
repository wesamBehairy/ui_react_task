import styles from './SectionThree.module.css';
import JustForStyle from './JustForStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SectionThree() {

    return (
        <div className="container">

            <div className="row mt-3">

                <div className={`col-xl-6 col-lg-6 col-md-5 ${styles.design_sec} `} >
                    <img alt="" src='./2.png' className={`img-fluid ${styles.sec_img}  `} />
                </div>

                <div className="col-xl-6 col-lg-6 col-md-7">

                    <div>
                        <h4 className={styles.hStyle}  >
                            We Designed Perfect App for You
                        </h4>
                    </div>

                    <div>
                        <p className={styles.pstyle}> In consequat, quam id sodales hendrerit, eros mi molestie leo an
                            lacinia risus neque tristique augue. Proin tempus urna vel congue
                            elementum. Vestibulum euismod accumsan.</p>
                    </div>

                    <div>

                        <ul>
                            <li className={styles.li_style}>
                                Lorem ipsum dolor sit amet into consectetur adipiscing elit
                            </li>
                            <li className={styles.li_style}>
                                Lorem ipsum dolor sit amet into consectetur.
                            </li>
                            <li className={styles.li_style}>
                                Lorem ipsum dolor sit amet into consectetur adipiscing.
                            </li>
                        </ul>

                    </div>

                    <div>
                        <button className={`btn mt-3 ${styles.btn_sec} `}> Learn More </button>
                    </div>


                </div>

            </div>

            <div className={`row  ${styles.style_sec} `}>
                <JustForStyle>
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

export default SectionThree;