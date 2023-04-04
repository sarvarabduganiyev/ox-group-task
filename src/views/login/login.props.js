import authService from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { authTokenReducer } from "../../redux/slices/auth";
import { toast } from "react-toastify";
import { Form } from "antd";
import React from "react";
import { storageService } from "../../services/storage.service";

export const useLoginProps = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const credentials = [
    {
      username: "user_task",
      password: "user_task",
      subdomain: "toko",
    },
  ];
  const submitLogin = (values) => {
    setLoading(true);
    const body = {
      _username: values.username,
      _password: values.password,
      _subdomain: values.subdomain,
    };
    authService
      .login(body)
      .then((res) => {
        dispatch(authTokenReducer(res.data.token));
        storageService.setAccessToken(res.data.token);
        toast.success("Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const audio = new Audio(
          "https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7"
        );
        audio.play();
      })
      .catch(() => {
        toast.error("Error Login", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(values);
  };
  const copyCredentials = (event, item) => {
    event.preventDefault();
    form.setFieldsValue({
      username: item.username,
      password: item.password,
      subdomain: item.subdomain,
    });
  };

  return { loading, credentials, copyCredentials, submitLogin, form };
};
