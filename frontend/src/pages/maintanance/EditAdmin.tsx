import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Col, Card, Form, FloatingLabel, Button, FormGroup, FormLabel } from "react-bootstrap";
// components
import PageTitle from "../../components/PageTitle";
import {
    maintananceAdminEditAsync,
    maintananceShowAsync,
} from "../../store/maintanance/MaintananceSlice";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userAsync, userShowAsync } from "../../store/user/UserSlice";
import { UserProfileDataType } from "../../types/UserType";
import { FormInput } from "../../components";
import SignaturePad from "react-signature-canvas";
import ReactSignatureCanvas from "react-signature-canvas";
import { MaintananceData, MaintananceType } from "../../types/MaintananceType";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HyperDatepicker from "../../components/Datepicker";
import { ButtonLoader } from "../../components/ButtonLoader";
import { MaintananceConversation } from "./MaintananceConversation";

const BasicInputElements = () => {
    const schemaResolver = yupResolver(
        yup.object().shape({
            work_requested: yup.string().required("Please select Work Requested"),
            tanent_name: yup.string().required("Please enter tanent name"),
        })
    );
    const [toast, setToast] = useState("");
    const [error, setLocalError] = useState("");
    const [maintanance, setMaintanance] = useState<MaintananceData>();
    const [localUser, setLocalUser] = useState<UserProfileDataType>();
    let { user, customerUser } = useSelector((state: RootState) => ({
        user: state.Auth.user,
        customerUser: state.CustomerAuth.user,
    }));

    if (!user) {
        user = customerUser;
    }
    const { admins } = useSelector((state: RootState) => ({
        admins: state.User.users,
    }));
    useEffect(() => {
        dispatch(userAsync({page: 1, limit: 1000}));
    }, []);

    const methods = useForm<MaintananceData>({
        defaultValues: {},
        resolver: schemaResolver,
    });
    const {
        handleSubmit,
        register,
        setError,
        control,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = methods;
    const dispatch = useDispatch<AppDispatch>();
    const [actionDate, setActionDate] = useState<Date>(new Date());
    const [timeIn, setTimeIn] = useState<Date>(new Date());
    const [timeOut, setTimeOut] = useState<Date>(new Date());
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(maintananceShowAsync(params.id))
            .unwrap()
            .then((response) => {
                if (response === null) {
                    return;
                }
                setMaintanance(response);
                setValue("id", response.id);
                setValue("tanent_name", response?.tanent_name!);
                setValue("work_requested", response?.work_requested!);
                setValue("tanent_signature", response?.tanent_signature!);
                // signCanvas.current?.fromDataURL(response?.tanent_signature);
                // if (personCanvas.current) {
                //   personCanvas.current.fromDataURL(response?.service_signature!);
                // }
                setValue("service_signature", response?.service_signature!);
                setValue("phone", response?.phone!);
                setValue('repaired_by', response?.repaired_by);
                setValue("ok_to_enter", response?.ok_to_enter.toString());
                // if (response?.action_taken) {
                //     setValue("action_taken", response?.action_taken!.toString()); 
                // }
                // // setValue("action_taken", response?.action_taken!.toString());
                // setValue("action_date", response?.action_date);
                // setValue("work_done", response?.work_done!);

                // setValue("status", response?.status.toString());
                // if (response?.chargable) {
                //   setValue("chargable", response?.chargable.toString());
                // }
                // // console.log(response?.action_date);
                // if (response?.action_date) {
                //   setActionDate(new Date(response?.action_date));
                // }
                // if (response?.time_in) {
                //   setTimeIn(new Date("2024-12-12 " + response?.time_in));
                // }
                // if (response?.time_out) {
                //   setTimeOut(new Date("2024-12-12 " + response?.time_out));
                // }
                // if (response?.time_in) {
                //   console.log(response?.time_in);
                //   setTimeIn(response?.time_in);
                // }
                // if (response?.time_out) {
                //   setTimeOut(response?.time_out);
                // }

                dispatch(userShowAsync(response.user_id))
                    .unwrap()
                    .then((response1) => {
                        setLocalUser(response1);
                    });
                // if (signCanvas.current) {
                //   signCanvas.current?.off();
                // }
            })
            .catch((error) => setLocalError(error));
    }, []);

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        dispatch(maintananceAdminEditAsync(data))
            .unwrap()
            .then((response) => {
                if (response && response.status === true) {
                    reset();
                    setToast(response.message);
                    setLocalError("");
                    //   signCanvas.current?.clear();
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    setIsLoading(false);
                }
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

    const params = useParams();

    //   const watchShowAge = watch("ok_to_enter");

    return (
        <>
            {toast && (
                <div className="alert alert-success">
                    {toast}
                    <Link to={"/maintanance-admin"}> Back to Maintanance.</Link>
                </div>
            )}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}
            <form onSubmit={onSubmit}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="me-2">Building</Form.Label>
                                    <Form.Label>{localUser && localUser.user.apartment_name}</Form.Label>
                                    <FormInput
                                        type="hidden"
                                        name="user_id"
                                        value={user.user_id}
                                        disabled={true}
                                        register={register}
                                    />

                                    <FormInput type="hidden" name="id" register={register} disabled={true} />
                                </Form.Group>
                            </Col>

                            <Col lg={3}>
                                <Form.Group className="mb-3 input-group">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Suite
                                    </Form.Label>
                                    <Form.Label>{localUser && localUser.user.flat_name}</Form.Label>
                                    <FormInput
                                        type="hidden"
                                        disabled={true}
                                        name="flat_id"
                                        value={localUser && localUser.user.flat?.flat_id}
                                        register={register}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Label className="me-2">Tanent Name</Form.Label>
                                <Form.Label>{maintanance && maintanance.tanent_name}</Form.Label>
                                <FormInput
                                    type="hidden"
                                    disabled={true}
                                    register={register}
                                    name="tanent_name"
                                    errors={errors}
                                    key="tanent_name"
                                />
                            </Col>
                            <Col lg={3}>
                                <Form.Label className="me-2">Tanent Phone</Form.Label>
                                <Form.Label>{maintanance && maintanance.phone}</Form.Label>
                                <FormInput
                                    type="hidden"
                                    disabled={true}
                                    name="phone"
                                    register={register}
                                    errors={errors}
                                    key="phone"
                                />
                            </Col>
                            <Col lg={5}>
                                <Form.Group className="mb-3 input-group">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Ok to Enter
                                    </Form.Label>
                                    <Form.Label>{(maintanance && maintanance.ok_to_enter == "1") ? "Yes" : "No"}</Form.Label>
                                    <FormInput
                                        type="hidden"
                                        disabled={true}
                                        className="form-check-inline"
                                        name="ok_to_enter"
                                        register={register}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Form.Label htmlFor="small" className="me-2">
                                    Request
                                </Form.Label>
                                <Form.Label>{maintanance && maintanance.work_requested}</Form.Label>
                                <FormInput
                                    type="hidden"
                                    name="work_requested"
                                    disabled={true}
                                    register={register}
                                    errors={errors}
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col lg={12}>
                                <Form.Group className="mb-3 input-group">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Action Taken
                                    </Form.Label>
                                    <FormInput
                                        type="radio"
                                        className="form-check-inline"
                                        name="action_taken"
                                        register={register}
                                        value={1}
                                        errors={errors}
                                        label="Work Completed"
                                    />
                                    <FormInput
                                        type="radio"
                                        className="form-check-inline"
                                        name="action_taken"
                                        value={2}
                                        register={register}
                                        errors={errors}
                                        label="Repaired Temporarily"
                                    />
                                    <FormInput
                                        type="radio"
                                        className="form-check-inline"
                                        name="action_taken"
                                        register={register}
                                        value={3}
                                        errors={errors}
                                        label="Parts on Order"
                                    />
                                    <FormInput
                                        type="radio"
                                        className="form-check-inline"
                                        name="action_taken"
                                        register={register}
                                        value={4}
                                        errors={errors}
                                        label="Outside Contractor Called"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup className="input-group mb-3 ">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Date
                                    </Form.Label>
                                    <FormInput
                                        type="hidden"
                                        register={register}
                                        name="action_date"
                                        value={actionDate.toISOString().split("T")[0]}
                                        key="action_date"
                                    />
                                    <HyperDatepicker
                                        hideAddon={true}
                                        value={actionDate}
                                        showTimeSelect={false}
                                        inputClass="form-control-sm "
                                        dateFormat="MM-dd-yyyy"
                                        onChange={(date) => {
                                            setActionDate(date);
                                            setValue("action_date", date.toLocaleString("sv-SE"));
                                        }}
                                    />
                                    {errors && errors["action_date"] ? (
                                        <Form.Control.Feedback type="invalid">
                                            {errors["action_date"]!.message}
                                        </Form.Control.Feedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup className="input-group mb-3 ">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Time In
                                    </Form.Label>
                                    <FormInput
                                        type="hidden"
                                        register={register}
                                        name="time_in"
                                        key="time_in"
                                        errors={errors}
                                    />
                                    <HyperDatepicker
                                        value={timeIn}
                                        showTimeSelect={true}
                                        showTimeSelectOnly={true}
                                        inputClass="form-control-sm"
                                        onChange={(date) => {
                                            setTimeIn(date);
                                            setValue("time_in", timeIn.toLocaleTimeString("it-IT"));
                                        }}
                                    />
                                    {errors && errors["time_in"] ? (
                                        <Form.Control.Feedback type="invalid">
                                            {errors["time_in"]!.message}
                                        </Form.Control.Feedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup className="input-group mb-3 ">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Time Out
                                    </Form.Label>
                                    <FormInput
                                        type="hidden"
                                        register={register}
                                        name="time_out"
                                        key="time_out"
                                        errors={errors}
                                    />
                                    <HyperDatepicker
                                        value={timeOut}
                                        showTimeSelect={true}
                                        showTimeSelectOnly={true}
                                        inputClass="form-control-sm"
                                        onChange={(date) => {
                                            setTimeOut(date);
                                            setValue("time_out", timeOut.toLocaleTimeString("it-IT"));
                                        }}
                                    />
                                    {errors && errors["time_out"] ? (
                                        <Form.Control.Feedback type="invalid">
                                            {errors["time_out"]!.message}
                                        </Form.Control.Feedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <FormInput
                                    type="textarea"
                                    title="Work Done"
                                    name="work_done"
                                    className="mb-3"
                                    register={register}
                                    errors={errors}
                                    style={{ height: "75px" }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-2 input-group">
                                    <FormInput
                                        type="radio"
                                        name="chargable"
                                        value={1}
                                        register={register}
                                        errors={errors}
                                        label="Chargable to Occupant"
                                        className="form-check-inline"
                                    />
                                    <FormInput
                                        type="radio"
                                        name="chargable"
                                        value={2}
                                        register={register}
                                        errors={errors}
                                        label="Management"
                                        className="form-check-inline"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-2 input-group">
                                    {admins && localUser && <FormInput
                                        label="Repaired By"
                                        type="select"
                                        name="repaired_by"
                                        register={register}
                                        errors={errors}
                                        className="form-control-sm fs-5"
                                        containerClass={"mb-3"}
                                    >
                                        <option value="">Select Repaired By</option>
                                        {admins.data.map((user) => (
                                            <option value={user.user.id.toString()}>
                                                {user.user.name}
                                            </option>
                                        ))}
                                    </FormInput>}
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-2 input-group">
                                    <Form.Label className="me-2">Status:</Form.Label>
                                    <FormInput
                                        type="radio"
                                        id="repair_status"
                                        name="status"
                                        value={1}
                                        errors={errors}
                                        register={register}
                                        label="Pending"
                                        className="form-check-inline"
                                    />
                                    <FormInput
                                        type="radio"
                                        name="status"
                                        id="repair_status"
                                        value={2}
                                        errors={errors}
                                        register={register}
                                        label="In Progress"
                                        className="form-check-inline"
                                    />
                                    <FormInput
                                        type="radio"
                                        name="status"
                                        id="repair_status"
                                        value={3}
                                        errors={errors}
                                        register={register}
                                        label="On Hold"
                                        className="form-check-inline"
                                    />
                                    <FormInput
                                        type="radio"
                                        name="status"
                                        id="repair_status"
                                        value={4}
                                        errors={errors}
                                        register={register}
                                        label="Done"
                                        className="form-check-inline"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row>
                    <Col lg={3} className="mb-2">
                        {loading ? (
                            <ButtonLoader />
                        ) : (
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        )}
                    </Col>

                </Row>
            </form>
            <Row>
                {params && params.id && <MaintananceConversation admin={true} load={loading} id={params.id} />}
            </Row>

            {/*  */}
        </>
    );
};

const EditAdmin = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard-1" },
                    { label: "Maintanance", path: "/maintanance" },
                    { label: "Maintanance Edit", path: "/maintanance", active: true },
                ]}
                title={"Maintanance Request"}
            />

            <Row>
                <Col>
                    <BasicInputElements />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default EditAdmin;
