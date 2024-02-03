
export default function TertiaryHeader(props) {
    const { title, description = "", centered = false, color = "black" } = props
    if (!title) {
      return null
    }
    return (
      <div className={`${centered ? 'text-center' : 'w-full'}`} style={{color:color}}>
        {title && (
          <div className="text-xl font-extrabold tracking-tight md:text-2xl">
            {title}
          </div>
        )}
        {description && (
          <div className="mt-4 font-serif text-l text-gray-600 md:text-xl">
            {description}
          </div>
        )}
      </div>
    )
}