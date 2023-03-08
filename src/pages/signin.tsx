import { NextPage } from "next"
import { NextRouter, useRouter } from "next/router"
import React, { FormEvent, useState } from "react"
import useProfile from "src/hooks/useProfile"
import { useAppDispatch } from "src/stores/hooks"
import { SIGNIN } from "src/stores/slices/profileSlices"

const SignInPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const router: NextRouter = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userName, setUserName] = useState("Pumpkin")
  const [cashCoin, setCashCoin] = useState(500)
  const { setProfile } = useProfile()

  const onCashChange = (_v: string) => {
    const _value = Number(_v)
    setCashCoin(_value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    dispatch(SIGNIN({ username: userName, cash: cashCoin }))
    setProfile(userName)
    setTimeout(() => {
      router.push({ pathname: "/", query: { username: userName } })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div>
      <h2>SignInPage</h2>
      <form
        className="w-80 h-44 bg-slate-700 flex flex-col gap-y-4 items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-12 relative flex flex-row p-2">
          <label className="w-20 h-full flex items-center capitalize">
            username
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="w-full h-12 relative flex flex-row p-2">
          <label className="w-20 h-full flex items-center capitalize">
            cash
          </label>
          <input
            type="number"
            value={cashCoin}
            onChange={(e) => onCashChange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="uppercase w-24 h-10 bg-yellow-600"
          disabled={isLoading}
        >
          {isLoading ? "loading" : "sign in"}
        </button>
      </form>
    </div>
  )
}

export default SignInPage
