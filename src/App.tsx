import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import TodoList from "./pages/todo/TodoList.tsx";
import Home from "./pages/Home.tsx";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/todolist"} element={<TodoList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
