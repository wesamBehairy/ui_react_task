function SectionSeven() {

    const font_weight ={
        fontWeight:"700"
    }

    return (
        <div  className="container" style={{ backgroundColor: "#FF4363", color: "white" }}>
            <div className="row mt-5">

                <div className="col-lg-3 col-md-3 col-sm-6 pt-5 pb-5 text-center ">
                    <h2 className="" style={font_weight}> 12M+ </h2>
                    <p> Downloads</p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 pt-5 pb-5 text-center">
                    <h2 style={font_weight}> 18M+ </h2>
                    <p>  Active Users</p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 pt-5 pb-5 text-center">
                    <h2 style={font_weight}> 4.9 </h2>
                    <p>  Ratings</p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 pt-5 pb-5 text-center">
                    <h2 style={font_weight}> 300 M+ </h2>
                    <p>  Happy Clients</p>
                </div>

            </div>
        </div>
    )

}

export default SectionSeven;
