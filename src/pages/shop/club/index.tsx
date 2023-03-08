import CardClub from "@components/atoms/CardClub"
import { NextPage } from "next"
import React from "react"
import GridCardLayout from "src/layouts/GridCardLayout"
import { NextRouter, useRouter } from "next/router"
import Link from "next/link"
import { mockClubList } from "src/mockups/club.mock"
import Header from "@components/atoms/Header"

const ShopClubPage: NextPage = () => {
  const router: NextRouter = useRouter()
  const genDataList = () => {
    return mockClubList.map((c) => (
      <CardClub
        name={c.name}
        img={c.img}
        trophy={c.trophy}
        league={c.league}
        arena={c.stadium}
      />
    ))
  }

  return (
    <div className="flex w-full h-full relative flex-col">
      <Header />
      <h2>ShopPlayerPage</h2>
      <div className="w-full flex flex-row gap-x-2">
        <Link
          href="/"
          legacyBehavior
        >
          <a className="bg-slate-700 w-24 h-10 text-white items-center justify-center flex flex-col rounded-xl">
            Home
          </a>
        </Link>
        <button
          className="bg-black text-white w-24 h-10 uppercase rounded-xl"
          onClick={() => router.back()}
          type="button"
        >
          back
        </button>
      </div>

      <GridCardLayout dataList={genDataList()} />
    </div>
  )
}

export default ShopClubPage
