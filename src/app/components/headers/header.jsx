
export default function Header(props) {
    const { title, description = "", centered = false } = props
    if (!title) {
      return null
    }
    return (
      // <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'} pb-5`}>
      <div className={`${centered ? 'text-center' : 'w-full'} pb-5`}>
        {title && (
          <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </div>
        )}
        {description && (
          <div className={`${centered ? `flex justify-center` : ``} mt-4 font-serif text-xl text-gray-600 md:text-2xl`}>
            {description}
          </div>
        )}
      </div>
    )
}