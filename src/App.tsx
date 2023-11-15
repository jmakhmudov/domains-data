import {useState} from "react";
import type { RootState } from "./store"; 
import { getDomainData } from "./helpers/getDomainData";
import { useSelector, useDispatch } from 'react-redux'
import { setDomainInfo } from "./features/domain/domainSlice";

function App() {
  const domainInfo = useSelector((state: RootState) => state.domain);
  const dispatch = useDispatch();
  const [domain, setDomain] = useState("google.com")
  console.log(domainInfo)

  const handleEnterPress = async (event: { key: string; }) => {
    if(event.key === "Enter") {
      dispatch(setDomainInfo(await getDomainData(domain)));
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
            placeholder="Enter domain..."
            autoFocus
          />
        </section>
      </main>
    </>
  )
}

export default App
