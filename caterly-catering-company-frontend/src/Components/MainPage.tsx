
import { useNavigate } from "react-router-dom"

export default function MainPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={() => navigate("/catering-company/new-meal")}>Add new meal</button>
        </div>
    )
}