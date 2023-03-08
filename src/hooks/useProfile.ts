import { useEffect, useState } from "react"

const useProfile = () => {
  const [profile, setProfile] = useState<string>("")

  return { profile, setProfile }
}

export default useProfile
