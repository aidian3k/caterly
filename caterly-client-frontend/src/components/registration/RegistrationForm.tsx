import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./RegistrationForm.css";

// const AuthenticationService = {
//   register: async (data: any) => {
//     console.log("Wysyłanie danych do API:", data);
//     // Tu powinien znajdować się kod wysyłający dane na backend
//     // Na razie tylko symulacja odpowiedzi:
//     return new Promise((resolve) =>
//       setTimeout(() => resolve({ status: 200, message: "Success" }), 1000),
//     );
//   },
// };

interface RegistrationFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<RegistrationFormValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password: string): string | null => {
    if (
      password.length < 10 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      return "Hasło musi mieć co najmniej 10 znaków, w tym małą literę, dużą literę, cyfrę i znak specjalny.";
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (formValues.password !== formValues.confirmPassword) {
      setErrorMessage("Hasła muszą być takie same.");
      return;
    }

    const passwordValidationError = validatePassword(formValues.password);
    if (passwordValidationError) {
      setErrorMessage(passwordValidationError);
      return;
    }

    const hashedPassword = await bcrypt.hash(formValues.password, 10);
    const userData = {
      username: formValues.username,
      email: formValues.email,
      password: hashedPassword,
    };

    // try {
    //   const response = await AuthenticationService.register(userData);
    //
    //   if (response.status === 200) {
    //     alert("Rejestracja zakończona sukcesem!");
    //     navigate("/dashboard");
    //   } else {
    //     setErrorMessage("Rejestracja nie powiodła się. Spróbuj ponownie.");
    //   }
    // } catch (error) {
    //   console.error("Błąd podczas rejestracji:", error);
    //   setErrorMessage("Wystąpił błąd. Spróbuj ponownie później.");
    // }
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="registration-title">Rejestracja</h2>

        <div className="input-group">
          <label className="input-label" htmlFor="username">
            Nazwa użytkownika
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className={`input-field ${
              isSubmitted &&
              errorMessage &&
              formValues.password === formValues.confirmPassword
                ? "input-error"
                : ""
            }`}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="confirmPassword">
            Powtórz hasło
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            className={`input-field ${
              isSubmitted && errorMessage === "Hasła muszą być takie same."
                ? "input-error"
                : ""
            }`}
            required
          />
        </div>

        {isSubmitted && errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}

        <div className="button-group">
          <button type="submit" className="submit-button">
            Zarejestruj się
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Anuluj
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
