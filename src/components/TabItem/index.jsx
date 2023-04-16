
import "./index.css"

const TabItem = (props) => {
    const {tabDeatils ,isActive, setActiveTabId} = props
    const{tabId, displayText} = tabDeatils



    return(
        <li>
          <button onClick={()=>setActiveTabId(tabId)} className={isActive?"isactive-tab-item-button":"tab-item-button"}>{displayText}</button>
        </li>
    )
}


export default TabItem