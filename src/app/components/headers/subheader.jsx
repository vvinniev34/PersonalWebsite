
export default function SubHeader(props) {
    const { title, description = "", centered = false } = props
    if (!title) {
      return null
    }
    return (
      <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'} pb-20`}>
        {title && (
          <div className="text-2xl font-extrabold tracking-tight md:text-4xl">
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