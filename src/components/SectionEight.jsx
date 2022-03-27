import styles from './SectionEight.module.css';


function SectionEight() {

    return (
        <div className="container">

            <div className="row mt-5 text-center">

                <div className="col-lg-6 mx-auto">

                    <h1 className={` mb-4 mt-4 ${styles.hStyle} `} > Still Not Lucky? </h1>

                    <p className={` ${styles.pstyle} `}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard.
                    </p>

                </div>

                <div>
                    <button className={`btn rounded-bill ${styles.btn_sec} `}> Contact Us</button>
                </div>

            </div>

        </div>
    )

}

export default SectionEight;
