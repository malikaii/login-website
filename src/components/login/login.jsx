import  Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import { toast } from "react-hot-toast";
import { loginInfo } from "../home/home";
import { useNavigate } from "react-router-dom";
const Login = (props) =>{
    const [show, setShow] = useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState("d");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const validate = (e) => {
        if(email !== loginInfo.email){
            return false;
        }
        if(password !== loginInfo.password){
            return false;
        }  
        return true;
    }
    function onSubmit(e) {
        e.preventDefault();
        setIsValid(validate);
        if(!isValid){
            toast.error("Bad Credentials");
            handleOpen();
        }
        else{
            navigate("/dashboard")
        }
        
    }
    return(
        <>
            <Button onClick={handleOpen}>
                Login
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form validated={isValid}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Enter email" required/>
                            <Form.Text  className="text-muted" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Enter
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;