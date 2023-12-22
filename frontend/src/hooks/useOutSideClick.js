import { useEffect } from "react";

export default function useOutSideClick(modalRef, onClose , listenCapturing = true) {
  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    return () => document.removeEventListener("click", handleClick, listenCapturing);
  }, [onClose]);
}
