import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Home from "./pages/Home.tsx";
import Todo from "./pages/todo/Todo.tsx";
import Coin from "./pages/coin/Coin.tsx";
import Board from "./pages/board/Board.tsx";
import Detail from "./pages/board/Detail.tsx";
import MovieSearch from "./pages/movie/MovieSearch.tsx";
import MovieHome from "./pages/movie/MovieHome.tsx";
import MovieDetail from "./pages/movie/MovieDetail.tsx";
import BookHome from "./pages/books/BookHome.tsx";
import BookSearch from "./pages/books/BookSearch.tsx";
import BookDetail from "./pages/books/BookDetail.tsx";
import ProductDetail from "./pages/product/ProductDetail.tsx";
import ProductList from "./pages/product/ProductList.tsx";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />

                    <Route path={"/todo"} element={<Todo />} />

                    <Route path={"/coin"} element={<Coin />} />

                    <Route path={"/board"} element={<Board />} />
                    <Route path={`/board/:id`} element={<Detail />} />

                    <Route path={"/product"} element={<ProductList />} />
                    <Route path={"/product/:id"} element={<ProductDetail />} />

                    <Route path={"/book"} element={<BookHome />} />
                    <Route path={"/books"} element={<BookSearch />} />
                    <Route path={`/books/:id`} element={<BookDetail />} />

                    <Route path={"/movie"} element={<MovieHome />} />
                    <Route path={"/movies"} element={<MovieSearch />} />
                    <Route path={"/movies/:id"} element={<MovieDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
