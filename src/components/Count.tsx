import { addCount, getCount } from "@stores/slices/countSlices"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

interface IProps {
  count: number
  setNewCount: (_value: number) => void
}

const Count = ({ count, setNewCount }: IProps) => {
  const countRed = useSelector(getCount)
  const dispatch = useDispatch()

  const increaCount = () => {
    setNewCount(count + 1)
    dispatch(addCount(1))
  }

  return (
    <div>
      <h3>Count: ${countRed.count}</h3>
      <button onClick={() => increaCount()}>Add</button>
      {/* <button onClick={() => setNewCount(count - 1)}>-</button> */}
    </div>
  )
}

export default Count
