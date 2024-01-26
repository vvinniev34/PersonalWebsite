import React from "react";

const PageDivider = (props) => {
    const { marginTop = 5, marginBottom =5 } = props;
    return (
        <div className={`mt-${marginTop} mb-${marginBottom} p-0.5 bg-black`}>
        </div>
    );
}

export default PageDivider;