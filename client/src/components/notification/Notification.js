import './Notification.scss'
import { useEffect } from "react"
const Notification = ({ notificationContent, closeNotif }) => {
    
    useEffect(() => {
        setTimeout(() => {
            closeNotif()
        }, 9000);
    })
    return <div>
        <div className="notification">{notificationContent}</div>
    </div>
}

export default Notification