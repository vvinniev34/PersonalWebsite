import Link from 'next/link'

export default function Navbar() {
  const menuItems = ["Home", "Projects", "About", "Resume"]
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {menuItems.map((menuItem, i) => {
          return (
            <Link
              key={i}
              className={`text-lg hover:text-black md:text-xl ${
                menuItem === 'Home'
                  ? 'font-extrabold text-black'
                  : 'text-gray-600'
              } relative group`}
              href={menuItem.toLowerCase()}
            >
              {menuItem}
              <span className="absolute inset-x-0 left-0 bottom-[-0.1rem] h-0.5 bg-black underline scale-x-0"></span>
            </Link>
          )
        })}
    </div>
  )
}