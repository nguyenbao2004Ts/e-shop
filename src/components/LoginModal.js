import React, { useState } from "react";
import classes from "./LoginModal.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
  
    if (email === storedEmail && password === storedPassword) {
      onLoginSuccess(email);
      toast.success("Đăng nhập thành công");
    } else {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.error("Mật khẩu không khớp");
      return;
    }
  
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
  
    toast.success('Tạo tài khoản thành công');
    setIsRegistering(false);
  };
  
  const handleSwitchToRegister = () => {
    setIsRegistering(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegistering(false);
  };

  return (
    <>
      <ToastContainer />
      <div className={classes.backdrop} onClick={onClose}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
          {isRegistering ? (
            <>
              <h2>Tạo Tài Khoản</h2>
              <div className={classes.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.input}
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={classes.input}
                />
                <input
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={classes.input}
                />
              </div>
              <button
                className={classes.createAccountButton}
                onClick={handleRegister}
              >
                Xác Nhận
              </button>
              <button
                className={classes.switchButton}
                onClick={handleSwitchToLogin}
              >
                Đã có tài khoản? Đăng Nhập
              </button>
            </>
          ) : (
            <>
              <h2>Đăng Nhập</h2>
              <div className={classes.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.input}
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={classes.input}
                />
              </div>
              <button
                className={classes.loginButton}
                onClick={handleLogin}
              >
                Đăng Nhập
              </button>
              <button
                className={classes.createAccountButton}
                onClick={handleSwitchToRegister}
              >
                Tạo Tài Khoản
              </button>
              <p>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginModal;
