import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import AuthService from "../../services/AuthService";
import { validateEmail, validatePassword } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { loginAction } from "../../redux/actions/authActions";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const [loginFormValues, setLoginFormValues] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);

    if (
      !validatePassword(loginFormValues.password) ||
      !validateEmail(loginFormValues.email)
    ) {
      setPasswordError("Nieprawidłowy email lub hasło.");
      return;
    }

    try {
      setIsSubmitting(true);
      await AuthService.login(loginFormValues.email, loginFormValues.password);
      dispatch(loginAction());
      navigate("/");
    } catch (error: any) {
      setPasswordError(error.message || "Wystąpił nieoczekiwany błąd.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

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
        <p className="login-form-register">
          Nie masz konta?{" "}
          <Link to="/register" className="register-link">
            Zarejestruj się
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
