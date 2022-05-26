import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "../../redux/actions/popup.actions";
import If from "../../components/If/If";
import Registration from "./Registration.popup";
import styles from "./Authorization.module.scss";
import { login } from "../../redux/actions/user.actions";
import { pullCart, pushCart } from "../../redux/actions/cart.actions";
import { updateFavorites } from "./../../redux/actions/favorites.actions";

const Authorization = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ phone });
  const [mainError, setMainError] = useState("");

  const loginButton = useRef(null);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  const user = useSelector((state) => state.user);

  const clearErrors = () => {
    setErrors({ email: "", password: "" });
  };

  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  const checkValidation = () => {
    clearErrors();
    if (!phoneRegex.test(phone)) {
      setErrors((prev) => ({ ...prev, phone: "Введите корректный номер" }));
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    dispatch(
      openPopup((props) => (
        <Registration {...props} email={phone} password={password} />
      ))
    );
  };

  const handleForgotPassword = () => {};

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!checkValidation()) return;

    await loginButton.current.classList.add(styles.loading);
    const response = await fetch(process.env.NEXT_PUBLIC_HOST + "/loginphone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phone,
      }),
    });

    if (response.status >= 400) {
      loginButton.current.classList.remove(styles.loading);
      return setMainError("Неверный номер телефона");
    }

    const userData = await response.json();

    localStorage.setItem(process.env.NEXT_PUBLIC_LS_TOKEN, userData.token);

    dispatch(updateFavorites(favorites));

    dispatch(login(userData));

    if (cart.length)
      dispatch(
        pushCart(
          cart.map((item) => ({ productId: item.productId, count: item.count }))
        )
      );

    dispatch(pullCart());
  };

  useEffect(() => {
    if (user.token) {
      onClose();
    }
  }, [user.token, onClose]);

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (!e.target.closest("." + styles.wrap)) onClose();
    };
    window.addEventListener("mousedown", handleWindowClick);
    return () => window.removeEventListener("mousedown", handleWindowClick);
  }, [onClose]);

  return (
    <div className={styles.root}>
      <form className={styles.wrap} onSubmit={(e) => handleLogin(e)}>
        <div className={styles.title}>Авторизация</div>

        <Label
          type="phone"
          name="phone"
          sub_title="Введите номер телефона"
          error={errors.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+992ХХХХХХХХХ"
        />

        <div className={styles.button_group}>
          {mainError !== "" && <div className={styles.error}>{mainError}</div>}
          <button
            ref={loginButton}
            onClick={handleLogin}
            className={classNames(styles.btn, styles.contained_btn)}
          >
            Войти
          </button>
          <button
            onClick={() => handleRegister()}
            className={classNames(styles.btn, styles.outlined_btn)}
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
};

const Label = ({
  value,
  sub_title,
  type,
  name,
  placeholder,
  error = "",
  onChange = () => {},
  onFocus = () => {},
}) => {
  return (
    <div
      className={classNames(styles.label, error !== "" && styles.labelError)}
    >
      <div className={styles.sub_title}>{sub_title}</div>
      <div className={styles.input_wrap}>
        <input
          type={type}
          className={styles.input}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
        />
      </div>
      <If condition={error.trim() !== ""}>
        <div className={styles.error_info}>{error}</div>
      </If>
    </div>
  );
};

export default Authorization;
