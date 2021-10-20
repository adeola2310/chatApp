import React from "react";
import "./Toast.css";
import {
  CloseToastIcon,
  SuccessToastIcon,
} from "./ToastIcons";
import Title from "../Typography/Title/Title";

const Snack = props => {
  const { onDismiss, appearance } = props;

  return (
    <div className={`custom-toast toast-${appearance}`}>
      <div
        onClick={() => onDismiss()}
        style={{ padding: "5px", cursor: "pointer", display:"flex", justifyContent:"flex-end" }}
      >
        <CloseToastIcon />
      </div>
      <div style={{ paddingLeft: "10px" }}>
        <div
          style={{
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
          className="d-flx"
        >
          <div style={{ marginRight: "20px" }}>
            {appearance === "success" && <SuccessToastIcon />}
          </div>
            <Title className="toast-success">{appearance}</Title>
        </div>
      </div>
    </div>
  );
};

export default Snack;
