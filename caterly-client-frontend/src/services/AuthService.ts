import apiClient from "../lib/axios";

const AuthService = {
  login: async (email: string, password: string): Promise<void> => {
    try {
      const response = await apiClient.post("/auth", { email, password });
      console.log("Zalogowano pomyślnie:", response.data);
    } catch (error: any) {
      if (error.response) {
        throw new Error(
          error.response.data.message || "Nieprawidłowy email lub hasło.",
        );
      }
      throw new Error(
        "Nie udało się połączyć z serwerem. Spróbuj ponownie później.",
      );
    }
  },
};

export default AuthService;
