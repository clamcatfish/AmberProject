import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import SideBar from "../components/SideBar";
import TagBoard from "../components/TagBoard";

const getData = async () => {
    const response = await fetch(`http://localhost:3000/api/entries`)
    if (!response.ok) {
        throw new Error('Failed to fetch entries of tags')
    }
    return response.json()
}

const page = () => {

    // const entries = await getData()

    return (
        <div className=" grid grid-cols-[1fr_5fr]">
        <div className="sticky top-0 min-h-screen bg-green-900 w-56">
          <Nav />
          <SideBar />
        </div>
        <div className="min-h-screen bg-slate-200">
          <div className="mt-7 mb-7">
            <h1 className="text-4xl text-center text-emerald-600 font-bold">Search</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <TagBoard />
          </div>
        </div>
      </div>
    )
}

export default page