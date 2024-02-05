import { Button } from "react-bootstrap";
import { FormInput } from "../../components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PasswordDataType } from "../../types/UserType";
import { userResetAsync } from "../../store/user/UserSlice";
import * as yup from "yup";

interface IdType {
  id: Number;
}

export const ResetPassword = ({ id }: { id?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
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
      id: id,
    },
    resolver: schemaResolver,
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(userResetAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          //   reset();
        }
      })
      .catch((reason) => {
        for (var element in reason.errors) {
          try {
            // @ts-ignore
            setError(element, { message: reason.errors[element].toString() });
          } catch (errror) {}
        }
      });
  });

  return (
    <form onSubmit={onSubmit}>
      {toast && <div className="alert alert-success">{toast}</div>}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      <FormInput
        label="Reset Password"
        type="password"
        name="password"
        register={register}
        placeholder="password"
        containerClass={"mb-3"}
        key="password"
        errors={errors}
      />
      <FormInput type="hidden" name="id" register={register} />
      <Button variant="primary" type="submit">
        Reset
      </Button>
    </form>
  );
};
