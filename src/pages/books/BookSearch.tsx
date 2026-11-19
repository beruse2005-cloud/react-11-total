import { Link, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import SearchBar from "./components/SearchBar.tsx";

export type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        description?: string | undefined;
        imageLinks?: {
            thumbnail: string;
        };
    };
};

type ApiResponse = {
    items: Book[];
};

export const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function BookSearch() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    const [list, setList] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!keyword) return;

        setLoading(true);

        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=20&key=${API_KEY}`,
        )
            .then(res => res.json())
            .then((json: ApiResponse) => setList(json.items))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.log(err);
                }
            })
            .finally(() => setLoading(false));
    }, [keyword]);

    return (
        <div className={styles.container}>
            <h3>검색 결과 : {keyword}</h3>

            <SearchBar keyword={keyword || ""} />

            {loading ? (
                <div className={styles.message}>로딩 중입니다...</div>
            ) : list.length === 0 ? (
                <div className={styles.message}>검색 결과가 없습니다.</div>
            ) : (
                list.map((item, index) => {
                    return (
                        <Link key={index} to={`/detail/${item.id}`} className={styles.book}>
                            {item.volumeInfo.imageLinks ? (
                                <img
                                    className={styles.cover}
                                    src={item.volumeInfo.imageLinks.thumbnail}
                                    alt={item.volumeInfo.title}
                                />
                            ) : (
                                <div className={styles.no_cover}>No Cover</div>
                            )}

                            <div>
                                <div className={styles.title}>{item.volumeInfo.title}</div>
                                <div className={styles.authors}>
                                    {item.volumeInfo.authors?.join(", ")}
                                </div>
                            </div>
                        </Link>
                    );
                })
            )}
        </div>
    );
}

export default BookSearch;
