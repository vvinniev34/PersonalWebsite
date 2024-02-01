
const SmoothScrollLink = (props) => {
    const { key, className, href, targetId, children } = props

   const scroll = function (element_id) {
    const element = document.getElementById(element_id)
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

    return (
        <span 
            key={key} 
            className={className} 
            onClick={() => scroll(targetId)}
            // href={href} 
            // as={targetId}
            style={{cursor:"pointer"}}
        >
            {children}
        </span>
    );
};

export default SmoothScrollLink;