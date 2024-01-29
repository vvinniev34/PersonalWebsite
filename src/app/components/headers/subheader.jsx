
export default function SubHeader(props) {
    const { title, description = "", centered = false, color = "black" } = props
    if (!title) {
      return null
    }
    return (
      // <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'} pb-5`}>
        <div className={`${centered ? 'text-center' : 'w-full'} pb-5`}>
        {title && (
          <div className={`text-2xl font-extrabold tracking-tight md:text-4xl`} style={{color:color}}>
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