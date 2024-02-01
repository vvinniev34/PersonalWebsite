import React from "react";

const SecondaryPageDivider = (props) => {
    const { marginTop = 0, marginBottom = 0, dark=false } = props;
    return (
        // <div className={`bg-black w-full`} style={{ height:"1px", marginTop:`${marginTop}%`, marginBottom:`${marginBottom}%`, width:"100%"}}>
        // </div>
        <hr style={{borderTop:`1px solid ${dark ? "white" : "black"}`}}></hr>
    );
}

export default SecondaryPageDivider;