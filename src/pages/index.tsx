import { NextPage } from "next"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { NextRouter, useRouter } from "next/router"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@stores/hooks"
import { getProfile, SIGNOUT, UPDATE_COIN } from "@stores/slices/profileSlices"
import { getMaterialTypes } from "src/services/naka.service"
import Count from "@components/Count"
import useProfile from "src/hooks/useProfile"
import { useDispatch } from "react-redux"
import Header from "@components/atoms/Header"

interface IList {
  label: string
  data: string
  icon: string
  href: string
  active: boolean
}

const HomePage: NextPage = () => {
  const router: NextRouter = useRouter()
  const profile = useAppSelector(getProfile)
  const dispatch = useDispatch()
  const fetchRef = useRef<boolean>(false)

  const [update, setUpdate] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  const { setProfile, profile: address } = useProfile()

  const onSignOut = () => {
    dispatch(SIGNOUT())
  }

  const fetchMaterial = async () => {
    // const { status, data, message, isActive } = await getMaterialTypes()
    // if (status && data) {
    //   const _data: string = data[0].id
    //   dispatch(UPDATE_COIN({ coin: 10 }))
    // }
  }

  const handleUpdate = () => {
    setUpdate(!update)
    setUpdate((prev: boolean) => !prev)
    setCount(count + 1)
    setCount((prev: number) => prev + 1)
  }

  useEffect(() => {
    // fetchMaterial()
    console.log(`effect`, update)
  }, [update])

  return (
    <div className="flex w-full h-full relative flex-col">
      <Header />
      <h2>HomePage</h2>
      <div className="flex w-96 bg-slate-900 rounded-xl text-white px-4 h-10 capitalize items-center flex-row gap-x-4">
        <span>
          {!profile.isLoggedIn ? (
            <>
              <span className="mr-4">Please signIn</span>
              <Link href="/signin">
                <button
                  className="bg-yellow-600 w-24 h-6 text-black uppercase"
                  type="button"
                >
                  signin
                </button>
              </Link>
            </>
          ) : (
            `user: ${profile.username}`
          )}
        </span>
        <span className="text-yellow-600">
          {!profile.isLoggedIn ? null : `cash: ${profile.cash}`}
        </span>
        {!profile.isLoggedIn ? null : (
          <button
            className="bg-red-600 w-24 h-6 uppercase"
            type="button"
            onClick={() => onSignOut()}
          >
            sign out
          </button>
        )}
      </div>
      <div className="flex w-full flex-row gap-x-4">
        <Link href="/signin">
          <button
            className="bg-purple-600 w-44 h-10 uppercase"
            type="button"
          >
            cart
          </button>
        </Link>

        <Link href={{ pathname: "/shop/player", query: { from: "homePage" } }}>
          <button
            className="bg-pink-600 w-44 h-10 uppercase"
            type="button"
          >
            shop player
          </button>
        </Link>
        <button
          className="bg-blue-600 w-24 h-10 uppercase"
          type="button"
          onClick={() => router.push("/shop/club")}
        >
          club
        </button>
      </div>
      <div>{address}</div>
      <Count
        count={count}
        setNewCount={setCount}
      />
    </div>
  )
}

export default HomePage
