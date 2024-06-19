const apiUrl = process.env.NEXT_PUBLIC_API_URL

import EntryList from "@/app/components/EntryList";
import Nav from "@/app/components/Nav";
import SideBar from "@/app/components/SideBar";

const getData = async (book) => {
    const response = await fetch(`${apiUrl}/api/entries/books/${book}`, { cache: "no-store" })

    return response.json();
}

const page = async ({ params }) => {

    const { book } = params;
    const entries = await getData(book)
    const spaceBook = decodeURIComponent(book)

    const sortedEntries = [...entries].sort((a, b) => {
        return a.page_number - b.page_number
    })

    return (
        <div className=" grid grid-cols-[1fr_5fr]">
            <div className="min-h-screen bg-green-900 w-56">
            <Nav />
            <SideBar />
            </div>
                <div className="  bg-slate-200">
                    <div className="my-10">
                        <h1 className="text-4xl text-center text-emerald-600 font-bold">Entries in {spaceBook}</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <EntryList entries={sortedEntries}/>
                    </div>
            </div>
      </div>
    )
};

export default page;
