import { ACCESS_KEY, REFRESH_KEY } from "@/constants/auth.constant";
import { Token } from "@/libs/token";
import { useRouter } from "next/navigation";

export const useTokenCheck = () => {
  const accessToken = Token.getToken(ACCESS_KEY);
  const refreshToken = Token.getToken(REFRESH_KEY);

  const router = useRouter();

  if (accessToken === null || refreshToken === null) {
    window.alert("로그인이 필요한 서비스에요!");
    router.push("/");
  }
};
