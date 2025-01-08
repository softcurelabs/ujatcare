import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { flatAsync } from "../../store/flat/FlatSlice";
import { UserData } from "../../types/UserType";
import { userAddAsync } from "../../store/user/UserSlice";
import { ButtonLoader } from "../../components/ButtonLoader";

const BasicInputElements = () => {
    const { t } = useTranslation();
    const schemaResolver = yupResolver(
        yup.object().shape({
            first_name: yup.string().required(t("Please select first name")),
            last_name: yup.string().required(t("Please select last name")),
            role_id: yup.string().required(t("Please select role")),
        })
    );
    const [toast, setToast] = useState("");
    const [error, setNewError] = useState("");
    const [loading, setIsLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { flats } = useSelector((state: RootState) => ({
        flats: state.Flat.flats,
    }));
    useEffect(() => {
        dispatch(flatAsync());
    }, []);

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm<UserData>({ defaultValues: {}, resolver: schemaResolver });
    const apartment_id = watch('apartment_id');

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        dispatch(userAddAsync(data))
            .unwrap()
            .then((response) => {
                if (response && response.status === true) {
                    setToast(response.message);
                    //   reset();
                }
                setIsLoading(false);
            })
            .catch((reason) => {
                for (var element in reason.errors) {
                    try {
                        // @ts-ignore
                        setError(element, { message: reason.errors[element].toString() });
                    } catch (errror) { }
                }
                setIsLoading(false);
            });
    });

    return (
        <>
            {toast && <div className="alert alert-success">{toast}</div>}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}
            <Card>
                <Card.Body>
                    <Row>
                        <Col lg={6}>
                            <form onSubmit={onSubmit}>
                                <FormInput
                                    label="First Name"
                                    type="text"
                                    register={register}
                                    name="first_name"
                                    errors={errors}
                                    rows="5"
                                    containerClass={"mb-3"}
                                    key="first_name"
                                />
                                <FormInput
                                    label="Last Name"
                                    type="text"
                                    register={register}
                                    name="last_name"
                                    errors={errors}
                                    rows="5"
                                    containerClass={"mb-3"}
                                    key="last_name"
                                />
                                <FormInput
                                    label="Email"
                                    type="text"
                                    register={register}
                                    name="email"
                                    errors={errors}
                                    rows="5"
                                    containerClass={"mb-3"}
                                    key="email"
                                />
                                <FormInput
                                    label="Phone number"
                                    type="number"
                                    register={register}
                                    name="phone_number"
                                    errors={errors}
                                    containerClass={"mb-3"}
                                    key="phone_number"
                                />
                                <FormInput
                                    type="hidden"
                                    label="Role"
                                    name="role_id"
                                    containerClass="mb-3"
                                    register={register}
                                    errors={errors}
                                    value={'recident'}
                                >
                                </FormInput>
                                <FormInput
                                    type="select"
                                    label="Property"
                                    name="apartment_id"
                                    className="form-control-sm fs-5 "
                                    containerClass={"mb-3 "}
                                    register={register}
                                    errors={errors}
                                >
                                    {flats.length &&
                                        flats.map((flat) => (
                                            <option key={`apartment${flat.id}`} value={flat.id}>
                                                {flat.name.toString()}
                                            </option>
                                        ))}
                                </FormInput>
                                <FormInput
                                    type="select"
                                    label="Suite"
                                    name="flat_id"
                                    className="form-control-sm fs-5 "
                                    containerClass={"mb-3 "}
                                    register={register}
                                    errors={errors}
                                >
                                    {flats.length &&
                                        flats.map((flat) =>
                                        (
                                            <>{flat.flats.map((aprtment) => (
                                                !aprtment.has_occupied && apartment_id == flat.id && <option key={"flat" + aprtment.id} value={aprtment.id} disabled={aprtment.has_occupied}>
                                                    {aprtment.name}
                                                </option>
                                            ))}</>)
                                        )}
                                </FormInput>
                                {/* </Col> */}
                                {/* <FormInput
                  type="select"
                  label="Suite"
                  name="flat_id"
                  containerClass="mb-3"
                  register={register}
                  errors={errors}
                >
                  {flats.length &&
                    flats.map((flat) => (
                      <optgroup key={`apartment${flat.id}`} label={flat.name.toString()}>
                        {flat.flats.map((aprtment) => (
                          <option key={"flat" + aprtment.id} value={aprtment.id}>
                            {aprtment.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                </FormInput> */}
                                {loading ? (
                                    <ButtonLoader />
                                ) : (
                                    <Button variant="primary" type="submit">
                                        Create User
                                    </Button>
                                )}
                            </form>
                        </Col>

                        <Col lg={6}></Col>
                        <Col lg={3}></Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

const NewUser = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard-2" },
                    { label: "Users", path: "/tenant" },
                    { label: "Tenant", path: "/notice/new", active: true },
                ]}
                title={"Tenant"}
            />

            <Row>
                <Col>
                    <BasicInputElements />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default NewUser;
