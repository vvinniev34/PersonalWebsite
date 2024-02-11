
const SmoothScrollLink = (props) => {
    const { linkKey, className, href, targetId, children } = props

   const scroll = function (element_id) {
    const element = document.getElementById(element_id)
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

    return (
        <span 
            key={linkKey} 
            className={`${className}`} 
            onClick={() => scroll(targetId)}
            style={{cursor:"pointer"}}
        >
            {children}
        </span>
    );
};

export default SmoothScrollLink;