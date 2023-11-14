import {useState} from "react";
import { getDomainData } from "./helpers/getDomainData";

function App() {
  const [domain, setDomain] = useState("google.com")

  const handleEnterPress = async (event: { key: string; }) => {
    if(event.key === "Enter") {
      await getDomainData(domain)
    }
  }

  return (
    <>
      <nav>domains</nav>
      <main>
        <section className='search-box'>
          <div>Everything about</div>
          <input 
            type="text" 
            defaultValue={domain}
            onChange={(e) => setDomain(e.target.value)} 
            onKeyDown={handleEnterPress}
            autoFocus
          />
        </section>
      </main>
    </>
  )
}

export default App
