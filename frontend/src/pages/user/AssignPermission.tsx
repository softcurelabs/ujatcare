import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components/";
import { useNavigate, useParams } from "react-router-dom";
import { UserEditType, UserPermissionType } from "../../types/UserType";
import { userPermissionAsync, userShowAsync } from "../../store/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { flatAsync } from "../../store/flat/FlatSlice";
import { FlatType } from "../../types/FlatType";

const BasicInputElements = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToast] = useState("");
  const [localUser, setLocalUser] = useState<UserEditType>();
  const [error, setNewError] = useState("");
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );
  const { flats } = useSelector((state: RootState) => ({
    flats: state.Flat.flats,
  }));

  /*
   * form methods
   */
  const [disabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<UserPermissionType>({
    defaultValues: {},
    resolver: schemaResolver,
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(userPermissionAsync(data))
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
  useEffect(() => {
    dispatch(flatAsync())
      .unwrap()
      .then(() => {
        dispatch(userShowAsync(params.id))
          .unwrap()
          .then((response) => {
            setLocalUser(response);
            setValue("id", response.user.id);
            setValue("email", response.user.email);
            setValue("apartment_id", response.user.apartment_id);
            if (response.user.flat) {
              setValue("flat_id", response.user.flat.flat_id);
            }
            setValue("role_id", response.user.role);
          })
          .catch((error) => setNewError(error));
      });
  }, [params.id]);

  const apartment_id = watch('apartment_id');
  let options: Array<FlatType> = [];
  if (apartment_id && flats.length) {
    for(let i=0 ; i< flats.length;i++) {
      if (apartment_id == flats[i].id) {
        options = flats[i].flats;
        break;
      }
    }
    if (localUser && localUser.user.flat) {
      setValue("flat_id", localUser.user.flat.flat_id);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          {toast && <div className="alert alert-success">{toast}</div>}
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}

          <Row>
            <Col lg={6}>
              <form onSubmit={onSubmit} className={disabled ? "form-readonly" : ""}>
                <fieldset>
                  <FormInput
                    label="Email"
                    type="email"
                    register={register}
                    name="email"
                    placeholder="Email"
                    containerClass={"mb-3"}
                    disabled={true}
                  />
                  <FormInput type="hidden" name="role_id" register={register} errors={errors} value='recident' />
                <FormInput
                  type="select"
                  label="Building#"
                  name="apartment_id"
                  containerClass="mb-3"
                  register={register}
                  errors={errors}
                >
                  <option value={""}>Select Building</option>
                  {flats.length &&
                    flats.map((flat) => (
                      <option key={`apartment${flat.id}`}  value={flat.id}>
                        {flat.name.toString()}
                      </option>
                    ))}
                </FormInput>
                <FormInput
                  type="select"
                  label="Suite#"
                  name="flat_id"
                  containerClass="mb-3"
                  register={register}
                  errors={errors}
                >
                  <option value={""}>Select Flat</option>
                  {options.length &&
                    options.map((aprtment) => {
                      let selected = false;
                      if (localUser && localUser.user.flat && localUser.user.flat.flat_id == aprtment.id) {
                        selected = true;
                      }
                      return aprtment.has_occupied ? (
                        <option key={"flat" + aprtment.id} value={aprtment.id} disabled selected={selected}>
                          {aprtment.name}
                          {aprtment.has_occupied}
                        </option>
                      ) : (
                        <option key={"flat" + aprtment.id} value={aprtment.id} selected={selected}>
                          {aprtment.name}
                          {aprtment.has_occupied}
                        </option>
                      )
                    })}
                </FormInput>
                </fieldset>
                <Button
                  onClick={() => navigate(-1)}
                  variant="primary"
                  className="me-2"
                  type="submit"
                >
                  Back
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const AssignPermission = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Tenants", path: "/resident" },
          { label: "Assign Permission", path: "/user", active: true },
        ]}
        title={"Assign Permission"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default AssignPermission;
