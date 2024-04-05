import {useState} from "react"
import "./tabs.scss"

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index) => {
        setActiveTab(index)
    }

    return (
        <div className="tabs">
            <div className="tabButtons">
                {tabs.map((tab, index) => (
                    <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={index === activeTab ? "active" : ""}
                    >
                    {tab.label}
                    </button>
                ))}
            </div>
            <div className={`tabContent ${activeTab === 1 ? 'fade-in' : 'fade-out'}`}>
        {tabs[activeTab].content}
      </div>
        </div>
    )
}

export default Tabs