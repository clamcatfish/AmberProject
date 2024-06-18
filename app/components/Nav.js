import Link from "next/link"

const Nav = () => {
  return (
    <div className=" bg-green-900 w-full" >
        <div className="hover:bg-green-950 px-3 mx-2 py-1 mb-1 mt-3 rounded">
          <Link href='/'>
            <h1 className=" font-noto_serif text-white font-bold text-center text-2xl">
              Amber Project
            </h1>
          </Link>
        </div>
        <div className=" mx-3 px-7 py-1 rounded">
          <Link href='/about'>
            <h1 className="hover:text-yellow-300 text-white font-medium text-lg font-display">
              About
            </h1>
          </Link>
        </div>
        <div className=" mx-3 px-7 py-1 rounded">
          <Link href='/add-new'>
            <h1 className="hover:text-yellow-300 text-white font-medium text-lg font-display">
              Add New
            </h1>
          </Link>
        </div>
        <div className=" mx-3 px-7 py-1 rounded">
          <Link href='/all-entries'>
            <h1 className="hover:text-yellow-300 text-white font-medium text-lg font-display">
              All Entries
            </h1>
          </Link>
        </div>
        <div className=" mx-3 px-7 py-1 rounded">
          <Link href='/favourites'>
            <h1 className="hover:text-yellow-300 text-white font-medium text-lg font-display">
              Favourites
            </h1>
          </Link>
        </div>
        <div className=" mx-3 px-7 py-1 rounded  mb-2">
          <Link href='/search'>
            <h1 className="hover:text-yellow-300 text-white font-medium text-lg font-display">
              Search
            </h1>
          </Link>
        </div>
    </div>
  )
}

export default Nav