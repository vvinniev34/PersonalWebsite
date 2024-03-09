
export default function TertiaryHeader(props) {
    const { title, description = "", centered = false, color = "black", descriptionColor="gray-600" } = props

    return (
      <div className={`${centered ? 'text-center' : 'w-full'}`} style={{color:color}}>
        {title && (
          <div className="text-xl font-extrabold tracking-tight md:text-2xl">
            {title}
          </div>
        )}
        {description && (
          <div className="mt-4 font-serif text-lg text-gray-600 md:text-xl" style={descriptionColor ? {color:descriptionColor} : {}}>
            {description}
          </div>
        )}
      </div>
    )
}