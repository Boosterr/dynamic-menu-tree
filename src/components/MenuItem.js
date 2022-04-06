import { useState } from "react"

const MenuItem = ({ list, toggleActive }) => {
    const [activeItem, setActiveItem] = useState("");

    function toggleList(i) {
        if (list.length) {
            toggleActive(i)
            setActiveItem(activeItem === "" ? "active" : "")
            console.log(i.name, "NODE NAME");
        }
    }
    return (
        <div className="menu">
            {list.length ?
                list[0].map(item => {
                    let activeClass = "menu__item" 
                    if(item.isActive) {
                        activeClass = "menu__item active"
                    }
                    return <ul onClick={() => toggleList(item)} className={activeClass} >
                        {item.name}
                        {item.nodes.map(i => {
                            return (
                                <li className="menu__subitem">{i.name}</li>
                            )

                        })}
                    </ul>
                })
                : <></>}
        </div>
    )
}

export default MenuItem