import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import { Link } from "react-router";

export type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    description: string;
    category: string;
    rating: number;
};

type ApiResponse = {
    products: Product[];
};

function ProductList() {
    const [list, setList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
            .then(res => {
                return res.json();
            })
            .then((json: ApiResponse) => {
                setList(json.products);
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className={styles.loading}>LOADING...</div>;
    }

    if (list.length === 0) {
        return <div className={styles.loading}>상품을 찾을 수 없거나, 오류가 발생 되었습니다.</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>상품 목록</h1>
            <div className={styles.listWrap}>
                {list.map(item => {
                    return (
                        <Link to={`/product/${item.id}`} key={item.id} className={styles.card}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className={styles.thumbnail}
                            />
                            <div className={styles.info}>
                                <h3 className={styles.name}>{item.title}</h3>
                                <p className={styles.price}>${item.price}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductList;
