import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PasswordDataType } from "../../types/UserType";
import * as yup from "yup";
import { ButtonLoader } from "../../components/ButtonLoader";
import { forgotPasswordAsync } from "../../store/auth/AuthSlice";

interface IdType {
  id: Number;
}

export const ResetPassword = ({ email }: { email: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PasswordDataType>({
    defaultValues: {
    },
    resolver: schemaResolver,
  });

const onSubmit = handleSubmit(() => {
  setIsLoading(true);
  // dispatch(forgotPassword(formData["username"]));
  dispatch(forgotPasswordAsync(email))
    .unwrap()
    .then((response) => {
      if (response && response.status === true) {
        setToast(response.message);
      }
      setIsLoading(false);
    })
    .catch((reason) => {
      setNewError(reason.message);
      setIsLoading(false);
    });
});

console.log(email)
  return (
    <form onSubmit={onSubmit}>
      {toast && <div className="alert alert-success">{toast}</div>}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      {loading ? (
        <ButtonLoader />
      ) : (
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      )}
    </form>
  );
};
