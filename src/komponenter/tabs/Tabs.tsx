import {useState} from "react"
import "./Tabs.scss"

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(null);
  
    const handleTabClick = (index) => {
      if (activeTab === index) {
        setActiveTab(null);
      } else {
        setActiveTab(index);
      }
    };
  
    return (
        <div className="Tabs">
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
          <div className="tab-content">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={index === activeTab ? "tab-pane active" : "tab-pane"}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Tabs;