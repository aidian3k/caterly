import apiClient from "../lib/axios";

const AuthService = {
  register: async (data: {
    email: string;
    password: string;
    city: string;
  }): Promise<void> => {
    try {
      const response = await apiClient.post("/auth/register", data);
      console.log("Rejestracja zakończona sukcesem:", response.data);
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message || "Błąd rejestracji.");
        
  login: async (email: string, password: string): Promise<void> => {
    try {
      const response = await apiClient.post("/auth/login", { email, password });
      console.log("Zalogowano pomyślnie:", response.data);
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.message || "Nieprawidłowy email lub hasło.");
      }
      throw new Error(
        "Nie udało się połączyć z serwerem. Spróbuj ponownie później.",
      );
    }
  },
};

export default AuthService;
