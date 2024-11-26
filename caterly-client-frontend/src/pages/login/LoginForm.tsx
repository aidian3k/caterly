import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import AuthService from "../../services/AuthService";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loginFormValues, setLoginFormValues] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = loginFormValues;

    setPasswordError(null);

    if (!validatePassword(password)) {
      setPasswordError(
        "Hasło musi mieć co najmniej 8 znaków, zawierać literę i cyfrę.",
      );
      return;
    }

    try {
      setIsSubmitting(true);
      await AuthService.login(email, password);
      navigate("/");
    } catch (error) {
      setPasswordError(error as string);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form-title">Logowanie</h2>
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginFormValues.email}
            onChange={handleChange}
            placeholder="Wprowadź email"
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginFormValues.password}
            onChange={handleChange}
            placeholder="Wprowadź hasło"
            required
          />
          <p className={`login-form-error ${passwordError ? "visible" : ""}`}>
            {passwordError}
          </p>
        </div>
        <button
          type="submit"
          className="login-form-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logowanie..." : "Zaloguj się"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
