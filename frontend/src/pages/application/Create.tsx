import { useState } from "react";
import { Row, Col, Card, Container, FormLabel, Button } from "react-bootstrap";

// components
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Applicant } from "./Applicant";
import { HouseHoldComposition } from "./HouseHoldComposition";
import { ResidenceHistory } from "./ResidenceHistory";
import { IncomeInformation } from "./IncomeInformation";
import { Assets } from "./Assets";
import { Accomodation } from "./Accomodation";
import { ReasonForMove } from "./ReasonForMove";
import { Comms } from "./Comms";
import { ApplicationType } from "../../types/ApplicationType";
import LogoLight from "../../assets/images/logo-light.png";
import { UploadDocuments } from "./UploadDocuments";
import { applicationAddAsync } from "../../store/application/ApplicationSlice";
import { Link } from "react-router-dom";
import GeneralInfo from "./GeneralInfo";
import Loader from "../../components/Loader";
import { ButtonLoader } from "../../components/ButtonLoader";

const BasicInputElements = () => {
  const schemaResolver = yupResolver(yup.object().shape({}));
  const [toast, setToast] = useState("");
  const [error] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [show, setShow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    setError,
    formState: { errors },
  } = useForm<ApplicationType>({
    defaultValues: {
      gender_first: 1,
      hc_gender_first: 1,
      hc_wheelchair_first: 2,
      translator_required: 2,
      under_notice: 2,
    },
    resolver: schemaResolver,
  });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    dispatch(applicationAddAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        for (var element in reason.errors) {
          try {
            // @ts-ignore
            setError(element, { message: reason.errors[element].toString() });
          } catch (errror) {}
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
      <Row>
        <Col>
          <form onSubmit={onSubmit}>
            <FormLabel>
              Note: When you have completed this application call the North Park Manor for an
              appointment.
            </FormLabel>
            <Applicant register={register} errors={errors} setValue={setValue} />
            <HouseHoldComposition register={register} errors={errors} setValue={setValue} />
            <ResidenceHistory register={register} errors={errors} setValue={setValue} />
            <IncomeInformation register={register} errors={errors} setValue={setValue} />
            <Assets register={register} errors={errors} setValue={setValue} />
            <Accomodation register={register} errors={errors} setValue={setValue} />
            <ReasonForMove register={register} errors={errors} setValue={setValue} />
            <UploadDocuments
              register={register}
              errors={errors}
              setValue={setValue}
              control={control}
            />
            <Comms register={register} errors={errors} setValue={setValue} control={control} />
            <Row>
              <Col lg={12} className="d-flex justify-content-center">
                {isLoading ? (
                  <ButtonLoader />
                ) : (
                    <>
                  <Button variant="primary" type="submit" className="waves-effect waves-light me-1">
                    Submit
                  </Button>
                  
                  </>
                )}
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Link to="#" onClick={() => setShow(true)}>
                  General Information
                </Link>
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
              <Link to="/" className="logo logo-light text-center"> Go Back to Home
                  </Link>
                  </Col>
            </Row>
          </form>

          <GeneralInfo
            show={show}
            onHide={() => {
              setShow(false);
            }}
            onSubmit={() => {
              setShow(false);
            }}
          />
        </Col>
      </Row>
    </>
  );
};

const Create = () => {
  return (
    <Container>
      {/* <PageTitle breadCrumbItems={[]} title={"Create Application"} /> */}
      <Row className="justify-content-center">
        <Col>
          <Container className="container-md">
            <Card className="px-4">
              <Card.Body>
                <Row className="mb-4">
                  <Col lg={2}>
                    <img src={LogoLight} height={"100"} />
                  </Col>
                  <Col lg={3}></Col>
                  <Col lg={2}>
                    <span className="text-center align-middle">
                      875 North Park Street Victoria B.C. V8W 3B8 (250) 383-7611
                    </span>
                  </Col>
                  <Col lg={3}></Col>
                  <Col lg={2}>
                    <div className="text-right align-middle mb-2">
                      Providing Non-profit Housing For Seniors
                    </div>
                    <div className="fs-6 align-middle mt-2">
                      An Outreach of First Baptist Church
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {/* <h2 className="">{"Create Application"}</h2> */}
                    <BasicInputElements />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Create;
