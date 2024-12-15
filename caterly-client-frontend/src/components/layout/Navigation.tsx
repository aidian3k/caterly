import NavigationLink from "./NavigationLink";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../lib/axios";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";

export default function Navigation() {
  const dispatch = useDispatch();
  const handleLogout = useMutation({
    mutationFn: async () => {
      await apiClient.post("/auth/logout");
    },
    onSuccess: () => {
      dispatch(logoutAction());
    },
    onError: (err) => {
      console.log("Wystąpił błąd przy wylogowywaniu.");
      console.log(err);
    },
  });

  return (
    <nav className="bg-blue-300 p-4 flex-row flex gap-5 w-full drop-shadow-md items-center mb-4">
      <div>
        <h1 className="font-bold text-2xl">Caterly</h1>
      </div>
      <div className="flex-grow flex flex-row gap-2.5 justify-start">
        <NavigationLink label="Strona główna" path="dashboard" />
        <NavigationLink label="Lista posiłków" path="meals" />
        <NavigationLink label="Koszyk" path="cart" />
      </div>
      <div
        className="flex flex-row justify-end p-1 text-md hover:text-gray-800 hover:cursor-pointer"
        onClick={() => handleLogout.mutate()}
      >
        <span>Wyloguj</span>
      </div>
    </nav>
  );
}
