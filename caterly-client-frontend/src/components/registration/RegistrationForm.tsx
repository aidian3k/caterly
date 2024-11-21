import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

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

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert("Hasła nie pasują!");
      return;
    }
    alert("Rejestracja zakończona sukcesem!");
    console.log("Form data:", formValues);
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
            className="input-field"
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
            className="input-field"
            required
          />
        </div>

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
