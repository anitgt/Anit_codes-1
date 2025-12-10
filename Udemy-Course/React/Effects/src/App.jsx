import { useState } from 'react'
import Counter from './counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <QuoteFetcherLoader/>
    </>
  )
}

export default App
