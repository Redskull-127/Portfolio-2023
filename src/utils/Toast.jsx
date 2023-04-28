import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShowToast = ({ text }) =>
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

export default ShowToast