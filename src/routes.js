import App from "./App"
import Movies from "./Movies"
import TV from "./TV"
import Books from "./Books"
import AddForm from "./AddForm"
import ErrorPage from "./ErrorPage"
import FoodForm from "./FoodForm"


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: "/tv",
                element: <TV />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/addForm",
                element: <AddForm />
            },
            {
                path: "/foodForm",
                element: <FoodForm />
            }
        ]
    },

]

export default routes