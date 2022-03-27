function JustForStyle({ children }) {

    const circleStyle = {
        width: "120px",
        height: "120px",
        background: "#FFF4F5",
        borderRadius: "50%",
        // margin: "auto",
        color: "#FF7588",
        textAlign: "center"
    };

    return (
        <div className="mt-5" style={circleStyle}>
            {children}
        </div>
    )
}

export default JustForStyle;