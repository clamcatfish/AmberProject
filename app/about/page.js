import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="bg-white">&lt;&lt; Back to Home</h1>
      </Link>
      <div className="bg-white flex flex-col items-center">
        <h1 className="mb-8 mt-4 text-green-900 font-bold text-4xl text-center">
          About
        </h1>
        <h2 className=" font-noto_serif font-semibold text-center text-xl mb-2">
          What is the Amber Project?
        </h2>

        <div className="flex flex-row">
          <div className="flex flex-col items-center p-4">
            <h1 className="font-roboto text-2xl">The Notebook</h1>
            <Image
              src="firstpage.jpeg"
              width={500}
              height="auto"
              alt="first page within the notebook"
            />
            <h1 className="font-roboto text-2xl">Pages Inside</h1>
            <Image
              src="writinginside.jpeg"
              width={500}
              height="auto"
              alt="example documentation"
            />
            <h1 className="font-roboto text-2xl mt-3">Spreadsheet</h1>
            <Image
              src="spreadsheet.png"
              width={600}
              height="auto"
              alt="screenshot of the Focus spreadsheet on Google Sheets"
            />
          </div>
          <div className="flex flex-col items-center p-4 w-1/2">
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                The Amber Project is a full stack web application built with
                NextJs that uses MongoDB with Prisma to dynamically create pages
                and sort entries by tags on the search page.
              </p>
            </div>
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                Amber is the name I gave to a notebook. I use Amber to jot down
                page numbers I find interesting while I'm reading books with
                intent to learn.
              </p>
            </div>
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                I prefer not to use sticky notes, or write directly on the pages
                of the book. I like to keep the books in good condition.
              </p>
            </div>
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                I started writing down page numbers along with a brief summary
                back in October of 2020. The first book I did this with was
                Atomic Habits.
              </p>
            </div>
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                After finishing the book, I revisit the page numbers of interest
                and manually type the content of the page into a spreadsheet.
              </p>
            </div>
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                Since I quit playing video games in late 2023, the amount of
                books I've read and documented in Amber has doubled.
              </p>
            </div>
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                There are 13 books in the database on MongoDB. There are 2 more
                books I have completed, but haven't entered them into the
                database yet. Putting new entries in involves touch typing words
                from the book into the database by hand.
              </p>
            </div>
            <div className="py-7">
              <p className=" font-noto_serif text-center text-lg">
                I wanted to improve the recollection of all of the entries I
                have make over the years, which inspired me to turn The Amber
                Project into a web application.
              </p>
            </div>
            <Image
              src="amberbooks.jpeg"
              width={500}
              height="auto"
              alt="Amber holding books"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
