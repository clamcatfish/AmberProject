import Nav from "../components/Nav"
import SideBar from "../components/SideBar"
import EntryList from '../components/EntryList'

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/entries', { cache: "no-store" })
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const page = async () => {
  const entries = await getData()
  return (
    <div className=" grid grid-cols-[1fr_5fr]">
      <div className="min-h-screen bg-green-900 w-56">
        <Nav />
        <SideBar />
      </div>
      <div className="min-h-screen bg-slate-200">
        <div className="my-10">
          <h1 className="text-4xl text-center text-green-900 font-bold">All Entries</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <EntryList entries={entries}/>
        </div>
      </div>
    </div>
  )
}

export default page