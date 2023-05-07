import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ShowToast = ({ text }) => {
    toast(text, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
        style: {
            zIndex: 9999,
            top: "20px",
            background: "#333",
        },
    });
}

export const ShowErrorToast = ({ text }) => {
    toast(text, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        style: {
            zIndex: 9999,
            top: "20px",
            background: "#333",
        },
    });
}