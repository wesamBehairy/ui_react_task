import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';
import styles from './SectionOne.module.css';

function SectionOne() {
    return (
        <div className={`container-fluid  ${styles.whole_wrapper}`}>

            <div className='row'>
                <Navbar />
            </div>

            <div className='row'>

                <div className={`col-lg-5 col-md-12 offset-lg-1  mt-5 ${styles.disc_sec}`}>
                    <div className={styles.vv}>
                        <h1> Download Our app and enjoy!</h1>

                        <p> Contrary to popular belief, Lorem Ipsum is not simply randa text. has
                            roots in a piece of classical Latin literature from BC, making it over
                            2000 years old. Richard McClintock.
                        </p>
                    </div>

                    <div className={styles.download_sec}>
                        <button className={`btn mr-3  ${styles.btn_1} `}> Download App</button>
                        <FontAwesomeIcon icon="play" style={{ color: "#fff" }} />
                        <button className="btn" style={{ color: "#fff" }}> Watch Video</button>
                    </div>
                </div>

                <div className={` col-lg-5  offset-lg-1 ${styles.bttn}`}>
                    <img src="./1.png" alt="" className="img-fluid " style={{ width: "450px" }} />
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

export default SectionOne;