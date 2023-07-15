/* eslint-disable react/no-unescaped-entities */
import {WiStars} from "react-icons/wi"
import {NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="mx-0 bg-zinc-200 text-black border-solid border-b-[1px] border-zinc-400">
      <div className="flex justify-between text-center py-4 tablet:mx-2 tablet:py-3 mobile:mx-2 mobile:py-2">
          <div className="flex text-3xl font-bold tablet:text-2xl mobile:text-xl">
              <div><WiStars size={40}/></div>
              <div className="mobile:py-2">Lestari's <span className="text-red-400">Blog</span></div>
          </div>
          <nav className="flex text-black tablet:text-base mobile:text-sm ">
              <NavLink to="/"><button className="px-4 py-2 rounded-3xl hover:bg-red-300 tablet:px-3 mobile:px-2 mobile:py-3">Home</button></NavLink>
              <span className="py-2 mobile:py-3">|</span>
              <NavLink to="/products"><button className="px-4 py-2 rounded-3xl hover:bg-orange-300 tablet:px-3 mobile:px-2 mobile:py-3">Products</button></NavLink>
              <span className="py-2 mobile:py-3">|</span>
              <NavLink to="/contact"><button className="px-4 py-2 rounded-3xl hover:bg-sky-300 tablet:px-3 mobile:px-2 mobile:py-3">Contact</button></NavLink>
          </nav>
      </div>
      </header>
  )
}

export default Header