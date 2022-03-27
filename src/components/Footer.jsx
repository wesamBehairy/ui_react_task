import styles from './Footer.module.css';


function Footer() {

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className={`  ${styles.foot_sec} `}>
                    <span> Facebook </span>
                    <span> Twitter  </span>
                    <span> Youtube </span>
                    <span> Instagram</span>
                    <span> Pinterest</span>
                    <span> dribble</span>
                    <span> behance</span>
                    <span> LOGO</span>
                    {/* <span style={{ marginLeft: "36%" }}> 2020 Copyrights & Protected </span> */}
                </div>
            </div>
        </div>
    )

}

export default Footer;