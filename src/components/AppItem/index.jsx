import "./index.css"


const AppItem = (props) => {
    const {eachAppItem} = props
    const {imageUrl, appName} = eachAppItem
    return(
          <li className="appItem-card">
            <img src={imageUrl} alt={appName} className="app-image"/>
            <p className="app-name">{appName}</p>
          </li>
    )

}

export default AppItem