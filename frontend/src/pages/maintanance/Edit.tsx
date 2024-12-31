import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Col, Card, Form, Button, FormGroup, FormLabel, CardBody } from "react-bootstrap";
// components
import PageTitle from "../../components/PageTitle";
import {
    maintananceEditAsync,
    maintananceShowAsync,
} from "../../store/maintanance/MaintananceSlice";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userShowAsync } from "../../store/user/UserSlice";
import { UserProfileDataType } from "../../types/UserType";
import { FormInput } from "../../components";
import SignaturePad from "react-signature-canvas";
import ReactSignatureCanvas from "react-signature-canvas";
import { MaintananceData } from "../../types/MaintananceType";
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
            phone: yup.string().required("Please enter phone name"),
            ok_to_enter: yup.string().required("Please select ok to enter"),
            tanent_signature: yup
                .string()
                .required()
                .matches(
                    /^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/,
                    "Signature must be png"
                ),
        })
    );
    const [toast, setToast] = useState("");
    const [error, setLocalError] = useState("");
    const [loading, setIsLoading] = useState(false);
    const [maintanance, setMaintanance] = useState<MaintananceData>();
    const [localUser, setLocalUser] = useState<UserProfileDataType>();
    let { user, customerUser } = useSelector((state: RootState) => ({
        user: state.Auth.user,
        customerUser: state.CustomerAuth.user,
    }));

    if (!user) {
        user = customerUser;
    }

    const methods = useForm<MaintananceData>({
        defaultValues: {},
        resolver: schemaResolver,
    });
    const {
        handleSubmit,
        register,
        setError,
        control,
        setValue,
        formState: { errors },
    } = methods;
    const dispatch = useDispatch<AppDispatch>();
    let signCanvas = useRef<ReactSignatureCanvas | null>(null);
    let personCanvas = useRef<ReactSignatureCanvas | null>(null);

    const formatIntoPng = () => {
        if (signCanvas.current) {
            const dataURL = signCanvas.current.toDataURL();
            return dataURL;
        }
    };

    const formatIntoPngPerson = () => {
        if (personCanvas.current) {
            const dataURL = personCanvas.current.toDataURL();
            return dataURL;
        }
    };
    const [actionDate, setActionDate] = useState(new Date());
    const [timeIn, setTimeIn] = useState(new Date());
    const [timeOut, setTimeOut] = useState(new Date());

    useEffect(() => {
        dispatch(userShowAsync(user.user_id))
            .unwrap()
            .then((response) => {
                setLocalUser(response);
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
                        signCanvas.current?.fromDataURL(response?.tanent_signature);
                        if (personCanvas.current) {
                            personCanvas.current.fromDataURL(response?.service_signature!);
                        }
                        setValue("phone", response?.phone!);
                        setValue("ok_to_enter", response?.ok_to_enter.toString());
                        if (response?.action_taken) {
                            setValue("action_taken", response?.action_taken!);
                        }

                        // // setValue("action_date", response?.action_date);
                        setValue("work_done", response?.work_done!);

                        setValue("status", response?.status.toString());
                        if (response?.chargable) {
                            setValue("chargable", response?.chargable.toString());
                        }
                        // console.log(response?.action_date);
                        if (response?.action_date) {
                            setActionDate(new Date(response?.action_date));
                        }
                        if (response?.time_in) {
                            setTimeIn(new Date("2024-12-12 " + response?.time_in));
                        }
                        if (response?.time_out) {
                            setTimeIn(new Date("2024-12-12 " + response?.time_out));
                        }
                        if (personCanvas) {
                            personCanvas.current?.off();
                        }
                        if (signCanvas) {
                            signCanvas.current?.off();
                        }
                    })
                    .catch((error) => setLocalError(error));
            });
    }, [user.user_id]);

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        dispatch(maintananceEditAsync(data))
            .unwrap()
            .then((response) => {
                if (response && response.status === true) {
                    setToast(response.message);
                    setLocalError("");
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    //   signCanvas.current?.clear();
                } else {
                    setLocalError(response?.message);
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

    const params = useParams();

    //   const watchShowAge = watch("ok_to_enter");

    return (
        <>
            {toast && (
                <div className="alert alert-success">
                    {toast}
                    <Link to={"/maintanance"}> Back to Maintanance.</Link>
                </div>
            )}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}
            {localUser && (
                <form onSubmit={onSubmit}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="me-2">Building: </Form.Label>
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
                                            Suite: 
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
                                    <Form.Label className="me-2">Tanent Name: </Form.Label>
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
                                    <Form.Label className="me-2">Tanent Phone: </Form.Label>
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
                                            Ok to Enter: 
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
                                        Request: 
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
                    {/* <Card><CardBody>
                        <Row>
                            <Col lg={12}>
                                <Form.Group className="mb-3 input-group">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Action Taken: 
                                    </Form.Label>
                                    <FormLabel className="fs-12">{maintanance?.action_taken == '1' ? 'Work Completed' : maintanance?.action_taken == '2' ? 'Repaired Temporarily' : maintanance?.action_taken == '3' ? 'Parts on Order' : maintanance?.action_taken == '4' ? 'Outside Contractor Called' : ''}</FormLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup className="input-group mb-3 ">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Date: 
                                    </Form.Label>
                                    <FormLabel>{maintanance?.action_date}</FormLabel>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup className="input-group mb-3 ">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Time In: 
                                    </Form.Label>
                                    <FormLabel>{maintanance?.time_in}</FormLabel>
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup className="input-group mb-3 ">
                                    <Form.Label htmlFor="small" className="me-2">
                                        Time Out: 
                                    </Form.Label>
                                    <FormLabel>{maintanance?.time_out}</FormLabel>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                            <Form.Label htmlFor="small" className="me-2">
                                        Work Done: 
                                    </Form.Label>
                                    <FormLabel>{maintanance?.work_done}</FormLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3 input-group">
                                    <FormLabel className="me-2">Chargable to: </FormLabel>
                                    <FormLabel>
                                    {maintanance?.chargable == '1' ? 'Occupant': maintanance?.chargable == '2' ? "Management": ""}
                                    </FormLabel>
                                </Form.Group>
                            </Col>
                            <Col lg={8}>
                            <Form.Group className="mb-2 input-group">
                                <Form.Label className="me-2">Status:</Form.Label>
                                <FormLabel>
                                    {
                                        maintanance?.status == '1' ? 'Pending' : 
                                        maintanance?.status == '2' ? 'In Progress' :
                                        maintanance?.status == '3' ? 'On Hold' :
                                        maintanance?.status == '4' ? 'Done' : ''
                                    }
                                </FormLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                    </CardBody></Card> */}
                </form>
            )}
            <Row>
                {params && params.id && <MaintananceConversation load={loading} id={params.id} />}
            </Row>

        </>
    );
};

const Edit = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard-1" },
                    {
                        label: "Maintanance Create",
                        path: "/maintanance/create",
                        active: true,
                    },
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
export default Edit;
