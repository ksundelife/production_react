import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

render(
    <BrowserRouter>
        <div>
            <App />
        </div>,
    </BrowserRouter>,
    document.getElementById("root")
)