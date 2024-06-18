import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white h-auto">
      <div className="mt-8 flex flex-col justify-center items-center">
        <img width={210} height="auto" src="Amber.jpeg"></img>
      </div>
      <div className="flex flex-row justify-center">
        <h1 className="m-3 font-display text-amber-brown font-medium text-9xl">
          Amber
        </h1>
        <div className=" w-9"></div>
        <h1 className="m-3 font-display text-amber-brown font-medium text-9xl">
          Project
        </h1>
      </div>
      <div className=" flex flex-row justify-center mt-4">
        <div className=" text-center w-1/4">
          <Link href='/all-entries'>
            <h1 className="hover:bg-gray-200 m-3 font-display text-amber-brown font-medium text-6xl">
              All Entries
            </h1>
          </Link>
        </div>
        <div className=" text-center w-1/4">
          <Link href='/add-new'>
            <h1 className=" hover:bg-gray-200 m-3 font-display text-amber-brown font-medium text-6xl">
              Add New
            </h1>
          </Link>
        </div>
        <div className=" text-center w-1/4">
          <Link href='/search'>
            <h1 className="hover:bg-gray-200 m-3 font-display text-amber-brown font-medium text-6xl">
              Search
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
