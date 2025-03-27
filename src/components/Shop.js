import React, { useState } from "react";
import { categories } from "../data/category";
import { products } from "../data/product";
import classes from "./Shop.module.css";
import Modal from "./Modal";
import Header from "./Header";
import Footer from "./Footer";
import Giohang from "./Giohang";
import ProductDetail from "./ProductDetail";
import Slider from "./Slider";

function Shop() {
  const [selectedCategory, setCategory] = useState(null);
  const [isShowModal, setShowModal] = useState(false);
  const [selectedProduct, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isShowCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState("");

  const onClickCategoryHandler = (cat_id) => {
    setCategory(cat_id);
  };

  const onClickProductHandler = (product) => {
    setProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onAddtoCartHandler = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        setNotification(`Đã thêm ${product.name} thêm 1 lần nữa vào giỏ hàng.`);
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        setNotification(`Đã thêm ${product.name} vào giỏ hàng.`);
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
    setTimeout(() => setNotification(""), 1000); // Ẩn thông báo sau 3 giây
  };

  const onSearchHandler = (term) => {
    setSearchTerm(term);
  };

  let filteredProducts = selectedCategory
    ? products.filter((product) => product.category_id === selectedCategory)
    : products;

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className={classes.container}>
      <Header soluong={cart.length} setShowCart={setShowCart} onSearch={onSearchHandler} />

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <ProductDetail selectedProduct={selectedProduct} />
        </Modal>
      )}

      {notification && <div className={classes.notification}>{notification}</div>}

      {!isShowCart && <Slider />}

      <div className={classes.row}>
        {!isShowCart && (
          <div className={classes.left}>
            <h2>Danh Mục</h2>
            {categories.map((cate) => (
              <div
                className={classes.cat}
                key={cate.id}
                onClick={() => onClickCategoryHandler(cate.id)}
              >
                {cate.name}
              </div>
            ))}
          </div>
        )}
        <div className={!isShowCart ? classes.right : classes.rightFull}>
          {!isShowCart && (
            <>
              <h2>Sản Phẩm</h2>
              <div className={classes.boxes}>
                {filteredProducts.map((product) => (
                  <div className={classes.product} key={product.id}>
                    <h3>{product.name}</h3>
                    <img
                      src={product.product_image}
                      className={classes.prodimg}
                      alt={product.name}
                    />
                    <div className={classes.productDetails}>
                      <h4>{product.price} $</h4>
                      <div className={classes.productButtons}>
                        <button onClick={() => onClickProductHandler(product)}>
                          Thông Tin
                        </button>
                        <button onClick={() => onAddtoCartHandler(product)}>
                          {cart.find((item) => item.id === product.id) ? (
                            <span className={classes.datontai}>
                              Sản phẩm đã có trong giỏ
                            </span>
                          ) : (
                            "Thêm Vào Giỏ"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {isShowCart && (
            <Giohang setShowCart={setShowCart} cart={cart} setCart={setCart} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
