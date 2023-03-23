import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from "~/Contexts/AppContext";
import parseRoutes from "~/utils/parseRoutes";
import { loginRoute, mainRoute } from "./routes";
export default function App() {
  return (
    <AppProvider>
      <RouterProvider
        router={createBrowserRouter(parseRoutes([...loginRoute, ...mainRoute]))}
      />
    </AppProvider>
  );
}
