import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import enterKey from "./assets/EnterKey.svg";

function App() {
  const navigate = useNavigate();
  const [domain, setDomain] = useState("google.com")

  const handleEnterPress = async (event: { key: string; }) => {
    if (event.key === "Enter" && domain.length > 0) {
      navigate(`/domain?query=${domain}`)
    }
  }

  return (
    <>
      <Header />
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
          <div className="enter-key">
            Press Enter
            <img src={enterKey} alt="enter" className={domain.length > 0 ? 'active' : 'inactive'} />
          </div>
        </section>

      </main>
    </>
  )
}

export default App
