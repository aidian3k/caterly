import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationFormData from "../../interfaces/RegistrationFormData";
import AuthService from "../../services/AuthService";
import "./RegistrationForm.css";
import authService from "../../services/AuthService";

const RegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<RegistrationFormData>({
    email: "",
    city: "",
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

    try {
      const userData = {
        email: formValues.email,
        password: formValues.password,
        city: formValues.city,
      };

      // Wywołanie AuthService.register
      await AuthService.register(userData);

      console.log("Rejestracja zakończona sukcesem!");
      navigate("/dashboard");
    } catch (error: any) {
      setErrorMessage(
        error.message || "Rejestracja nie powiodła się. Spróbuj ponownie.",
      );
    }
  };

  const handleCancel = () => {
    navigate("/login"); // should be page for ones that havent logged in
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="registration-title">Rejestracja</h2>

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
          <label className="input-label">Miasto</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formValues.city}
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
