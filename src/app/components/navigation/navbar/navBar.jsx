"use client"
import SmoothScrollLink from "./navUtils.jsx"

export default function Navbar() {
  const menuItems = [["Home", "/"], ["About", "about"], ["Experience", "experience"], ["Projects", "projects"]]
  return (
    <div className="sticky top-0 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32 w-full" style={{position:"fixed", zIndex:"12"}}>
      {menuItems.map((menuItem, i) => {
          return (
            <SmoothScrollLink
              key={i}
              className={`text-lg hover:text-black md:text-xl ${
                menuItem[0] === 'Home'
                  ? 'font-extrabold text-black'
                  : 'text-gray-600'
              } relative group`}
              href={`#${menuItem[1]}`}
              targetId={menuItem[1]}
            >
              {menuItem[0]}
              <span className="absolute inset-x-0 left-0 bottom-[-0.1rem] h-0.5 bg-black underline scale-x-0"></span>
            </SmoothScrollLink>
          )
        })}
    </div>
  )
}