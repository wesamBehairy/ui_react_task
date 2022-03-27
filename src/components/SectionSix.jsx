import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JustForStyle from './JustForStyle';
import styles from './SectionSix.module.css';


function SectionSix() {

    return (
        <div className="container">

            <div className="row">
                <JustForStyle>
                    <FontAwesomeIcon icon='question' className={styles.iconstyle} />
                </JustForStyle>
            </div>


            <div className="row mt-5">

                <div className="col-lg-6 col-md-7">

                    <div>
                        <h1  className={` ${styles.h1Style} `}> Have any Questions? </h1>

                        <p className={styles.pstyle}>
                            Cras accumsan pretium dignissim. Curabitur a orci lorem.
                            Phasellus tempor dolor vel odio efficitur ac sollicitudin.
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.hstyle}> How Can I Install The App ?</h4>

                        <p className={styles.pstyle}>
                            Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                            scelerisque nisi urna. Duis rutrum non risus in imperdiet.
                        </p>

                    </div>

                    <div>
                        <h4 className={ `mb-4  ${styles.hstyle}`} > What is the Main Features of this App? </h4>
                        <h4 className={styles.hstyle}>Is there any Video Sessions? </h4>
                    </div>

                </div>

                <div className="col-lg-5 col-md-5 offset-lg-1">
                    <img src="./5.png" alt="" className={`img-fluid ${styles.img_sec} `} />
                </div>

            </div>
        </div>
    )

}

export default SectionSix;
