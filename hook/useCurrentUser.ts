import { useSession } from 'next-auth/react'
import { NextResponse } from 'next/server'
import { useState, useEffect } from 'react'

async function fetchUser(email: string) {
  const res = await fetch(`/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  const user = await res.json()
  return user
}

export function useCurrentUser() {
  const { data: session } = useSession()
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser() {
      try {
        const email = session?.user?.email
  
        if (email !== null && email !== undefined && email !== '') {
          const user = await fetchUser(email)
          setUser(user)
        }
      } catch (error) {
        return NextResponse.json({ error })
      }
    }

    /**
     * TODO -> Check this
     * 
     * Got this error
     * error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or
     * be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
     * 
     * Fast solution was adding "void" forwards getUser()
     */
    // @typescript-eslint/no-floating-promises
    void getUser()
  }, [session])

  return user
}
