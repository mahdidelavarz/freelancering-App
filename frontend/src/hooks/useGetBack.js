import {useNavigate} from "react-router-dom";
export default function useGetBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
