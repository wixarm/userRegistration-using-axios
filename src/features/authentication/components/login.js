import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import {  Navigate} from 'react-router-dom';

import axios from "../../../api/axios";
const LOGIN_URL = "/api/login";

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [mobile, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [mobile, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL + "/",
        { mobile, password },
        {
          headers: {
            Authorization: "Bearer null",
            "content-type": "application/json",
          },
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));

      setAuth({ mobile, password });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("پاسخی از سرور دریافت نشد");
      } else if (err.response?.status === 400) {
        setErrMsg("کاربری با این مشخصات وجود ندارد");
      } else if (err.response?.status === 401) {
        setErrMsg("احراز هویت نشده اید");
      } else {
        setErrMsg("ورود ناموفق");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Navigate replace to="/dashboard" />
      ) : (
<center>
<section style={{ borderRadius: "15px", marginTop:"20px" }}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>سامانه سبحان</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">موبایل</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={mobile}
              required
            />

            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={password}
              required
            />
            <button>ورود</button>
          </form>
        </section>
</center>
      )}
    </>
  );
};

export default LoginForm;
