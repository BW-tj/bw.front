import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import If from "../../components/If/If";
import { openPopup } from "../../redux/actions/popup.actions";
import Authorization from "./Authorization.popup";
import styles from "./Authorization.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import SuccessCreateUser from "./SuccesCreateUser";

const Registration = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const [errors, setErrors] = useState({ phone: "" });
  const user = useSelector((state) => state.user);

  const loginButton = useRef(null);

  const dispatch = useDispatch();

  const clearErrors = () => {
    setErrors({ email: "", password: "" });
  };

  const checkValidation = () => {
    clearErrors();

    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!phoneRegex.test(phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Введите корректный номер",
      }));
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    dispatch(
      openPopup((props) => (
        <Authorization {...props} email={email} password={password} />
      ))
    );
  };

  const handleSuccess = () => {
    dispatch(openPopup((props) => <SuccessCreateUser {...props} />));
  };

  const handleRegister = async () => {
    if (!checkValidation()) return;

    await loginButton.current.classList.add(styles.loading);

    let data = null;

    const response = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/phoneregitration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phone,
        }),
      }
    );

    await loginButton.current.classList.remove(styles.loading);
    console.log(response);
    const result = response;

    if (response.status >= 200 && response.status < 300) handleSuccess();
    else setErrors((prev) => ({ ...prev, phone: result.Message }));
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
    <div className={classNames(styles.root, styles.start)}>
      <div className={styles.container}>
        <form
          className={styles.wrap}
          onSubmit={(e) => e.preventDefault()}
          onKeyPress={(e) => e.key === "Enter" && handleRegister()}
        >
          <div className={styles.title}>Регистрация</div>

          <Label
            type="tel"
            name="phone"
            sub_title="Введите номер телефона"
            error={errors.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+992XXXXXXXXX"
          />

          <div className={styles.button_group}>
            <button
              ref={loginButton}
              onClick={() => handleRegister()}
              className={classNames(styles.btn, styles.contained_btn)}
            >
              Зарегистрироваться
            </button>
            <button
              onClick={() => handleLogin()}
              className={classNames(styles.btn, styles.outlined_btn)}
            >
              Войти
            </button>
          </div>
        </form>
      </div>
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
          ref={(input) => input && error.trim() !== "" && input.focus()}
        />
      </div>
      <If condition={error.trim() !== ""}>
        <div className={styles.error_info}>{error}</div>
      </If>
    </div>
  );
};

export default Registration;
