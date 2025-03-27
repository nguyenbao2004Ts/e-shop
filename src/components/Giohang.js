import { useEffect, useState } from "react";
import classes from "./Giohang.module.css";
import HinhQR from "./QR.png";
import ConfirmDialog from "./ConfirmDialog";

function Giohang({ setShowCart, cart, setCart }) {
  const [tongtien, setTongtien] = useState(0);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const thaydoisoluong = (sanpham, sl) => {
    const idx = cart.indexOf(sanpham);
    const arr = [...cart];
    arr[idx].amount += sl;
    if (arr[idx].amount === 0) arr[idx].amount = 1;
    setCart([...arr]);
  };

  const removeProduct = (sanpham) => {
    const arr = cart.filter((sp) => sp.id !== sanpham.id);
    setCart([...arr]);
  };

  const tinhtongtien = () => {
    let tt = 0;
    cart.forEach((sp) => {
      tt += sp.price * sp.amount;
    });
    setTongtien(tt);
  };

  useEffect(() => {
    tinhtongtien();
  }, [cart]);

  const onCloseCartHandler = () => {
    setShowCart(false);
  };

  const confirmDelete = (sanpham) => {
    setProductToDelete(sanpham);
    setShowConfirmDialog(true);
  };

  const handleDeleteConfirmed = () => {
    removeProduct(productToDelete);
    setShowConfirmDialog(false);
    setProductToDelete(null);
  };

  const handleDeleteCancelled = () => {
    setShowConfirmDialog(false);
    setProductToDelete(null);
  };

  const onThanhToanHandler = () => {
    setShowPaymentDialog(true);
  };

  const onClosePaymentDialog = () => {
    setShowPaymentDialog(false);
    if (confirmPayment) {
      // Xóa các sản phẩm đã chọn từ giỏ hàng
      cart.forEach((sanpham) => removeProduct(sanpham));
    }
    setConfirmPayment(false); // Reset confirm state
  };

  const handleConfirmPayment = () => {
    setConfirmPayment(true);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Giỏ Hàng Của Bạn</h1>
      <div className={classes.cartHeader}>
        <div className={classes.image}>Hình Ảnh</div>
        <div className={classes.name}>Tên Sản Phẩm</div>
        <div className={classes.quantity}>Số Lượng</div>
        <div className={classes.unitPrice}>Đơn Giá</div>
        <div className={classes.totalPrice}>Thành Tiền</div>
        <div className={classes.actions}></div>
      </div>
      {cart.map((product) => (
        <div className={classes.row} key={product.id}>
          <div className={classes.image}>
            <img src={product.product_image} alt={product.name} />
          </div>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.quantity}>
            <button onClick={() => thaydoisoluong(product, 1)}>+</button>
            <input
              type="text"
              value={product.amount}
              readOnly={true}
              className={classes.quantityInput}
            />
            <button onClick={() => thaydoisoluong(product, -1)}>-</button>
          </div>
          <div className={classes.unitPrice}>{product.price} $</div>
          <div className={classes.totalPrice}>{product.price * product.amount} $</div>
          <div className={classes.actions}>
            <button className={classes.removeButton} onClick={() => confirmDelete(product)}>Xóa</button>
          </div>
        </div>
      ))}
      <hr />
      <div className={classes.footer}>
        <h2>Tổng Tiền Cần Thanh Toán: {tongtien} $</h2>
        <button className={classes.Button} onClick={onThanhToanHandler}>
          Thanh Toán
        </button>
      </div>
      <button className={classes.Button} onClick={onCloseCartHandler}>
        Quay lại Sản Phẩm
      </button>

      {showPaymentDialog && (
        <div className={classes.paymentDialog}>
          <div className={classes.dialogContent}>
            <h2>Thanh Toán</h2>
            <p>Quét mã QR để thanh toán</p>
            <img src={HinhQR} alt="Payment" className={classes.paymentImage} />
            <div className={classes.dialogButtons}>
              <button className={classes.Button} onClick={onClosePaymentDialog}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmDialog && (
        <ConfirmDialog
          message="Bạn có chắc chắn muốn xóa sản phẩm này không?"
          onConfirm={handleDeleteConfirmed}
          onCancel={handleDeleteCancelled}
        />
      )}
    </div>
  );
}

export default Giohang;
