import React from "react";
import classes from "./ConfirmDialog.module.css";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.dialog}>
        <p>{message}</p>
        <div className={classes.actions}>
          <button className={classes.Button} onClick={onConfirm}>Đồng ý</button>
          <button className={classes.Button} onClick={onCancel}>Hủy Bỏ</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
