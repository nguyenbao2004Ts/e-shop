import React, { useState } from "react";
import classes from "./Header.module.css";
import Hinhlogo from "./logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginModal from "./LoginModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header({ soluong, setShowCart, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const onShowCartHandler = () => {
    setShowCart(true);
  };

  const onSearchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const onShowLoginModalHandler = () => {
    setShowLoginModal(true);
  };

  const onCloseLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const handleLoginSuccess = (email) => {
    setUserEmail(email);
    setShowLoginModal(false);
    toast.success(`Chào mừng bạn, ${email}`);
  };

  const handleLogout = () => {
    setUserEmail(null);
    toast.success('Đăng xuất thành công');
  };

  return (
    <div className={classes.row}>
      <div className={classes.image}>
        <img src={Hinhlogo} alt="Logo_giadinh" />
      </div>
      <div className={classes.logo}>SHOP ĐIỆN TỬ</div>
      <input
        type="text"
        className={classes.search}
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Tìm kiếm sản phẩm..."
      />
      <div className={classes.logo_giadinh}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className={classes.cart} onClick={onShowCartHandler}>
        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        <span className={classes.cartamount}>
          <sup>{soluong}</sup>
        </span>
      </div>
      <button 
        className={classes.loginButton} 
        onClick={userEmail ? handleLogout : onShowLoginModalHandler}
      >
        {userEmail ? `Đăng xuất (${userEmail})` : "Đăng Nhập"}
      </button>
      {showLoginModal && <LoginModal onClose={onCloseLoginModalHandler} onLoginSuccess={handleLoginSuccess} />}
      <ToastContainer />
    </div>
  );
}

export default Header;
