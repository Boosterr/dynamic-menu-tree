import axios from "axios";
import { FC, useEffect, useState } from "react"
import MenuItem from "./components/MenuItem";
import "./App.css"


const App: FC = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    async function getList() {
      await axios
        .get(
          "/api/goodList.json"
        )
        .then(res => {
          setList((list) => [...list, res.data.nodes])
        })

    }
    getList()

  }, [])

  function toggleActive(item: any) {
    let active = false
    if(item.isActive === false) {
      active = true
    } else {
      active = false
    }
    setList(list => [...list, item.isActive = active])
  }

  return (
    <div className="wrapper">
      <MenuItem list={list} toggleActive={toggleActive} />
      
    </div>
  )
}

export default App