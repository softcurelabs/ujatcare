import { useEffect, useState } from "react";
import { FormInput } from "../../components";
import { Conversation, ConversationData, MaintananceData } from "../../types/MaintananceType";
import { conversationAsync, conversationCreateAsync } from "../../store/maintanance/MaintananceSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Button, Card, CardBody, CardHeader, Col } from "react-bootstrap";
import { ButtonLoader } from "../../components/ButtonLoader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const MaintananceConversation = ({ id, admin = false, load }: { id: string, admin?: boolean, load: boolean }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setIsLoading] = useState(false);
    const [conversation, setConversation] = useState<Array<Conversation>>([]);
    const schemaResolver = yupResolver(
        yup.object().shape({
            message: yup.string().required("Please enter message")
        })
    );
    let { user, customerUser } = useSelector((state: RootState) => ({
        user: state.Auth.user,
        customerUser: state.CustomerAuth.user,
    }));
    const [toast, setToast] = useState("");
    const [error, setLocalError] = useState("");


    if (!user) {
        user = customerUser;
    }
    const methods = useForm<ConversationData>({
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
    useEffect(() => {
        dispatch(conversationAsync(id)).unwrap().then(data => {
            if (data) {
                setConversation(data);
            }

        });
    }, [id, loading, load]);

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        dispatch(conversationCreateAsync(data))
            .unwrap()
            .then((response) => {
                if (response && response.status === true) {
                    setToast(response.message);
                    setLocalError("");
                    setIsLoading(false);
                    reset();
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

    return <>
        <Col>
            {conversation && <h4>Updates</h4>}

            {conversation && conversation.map(value => {
                return <Card>
                    <CardHeader className="border-bottom">
                        <div className="d-flex justify-content-between">
                            <strong>{value.sender && value.sender.name}</strong>
                            <div>{value.created_at}</div>
                        </div>
                    </CardHeader>
                    <CardBody dangerouslySetInnerHTML={{__html: value.message.toString() }} >
                    </CardBody>
                </Card>;
            })}
        </Col>
        <form onSubmit={onSubmit} className="mb-2">
            {toast && (
                <div className="alert alert-success">
                    {toast}
                </div>
            )}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}

            {!admin &&
                <>
                    <FormInput type="textarea" rows="5" className="mb-2" name="message" title="Message" register={register}></FormInput>
                    <FormInput type="hidden" name="maintanance_id" value={id} register={register}></FormInput>
                    {user && <FormInput type="hidden" name="sender_id" value={user.user_id} register={register}></FormInput>}

                    <Col lg={3}>
                        {loading ? (
                            <ButtonLoader />
                        ) : (
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        )}
                    </Col>

                </>}
        </form>
    </>
}