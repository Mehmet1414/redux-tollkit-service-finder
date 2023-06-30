import { Button, Form } from "react-bootstrap";
import { useApi } from "../../hooks/useApi";

export default function LoginPage() {
  const api = useApi();

  return (
    <>
      <div className="container   ">
        <div className="row ">
          <div className="col-lg-12 po  ">
            <div className="page-content  ">
              <div className="heading-section">
                <h4>
                  <em>Login Form</em>
                </h4>
              </div>
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const formJson = Object.fromEntries(formData.entries());
                  console.log(" >>  form jasson", formJson);

                  const authResponse = await api.post("auth/login", formJson);
                  console.log("autoResponse", authResponse);
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className=" text-light">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className=" text-light">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>

                <Button
                  variant="outline-light"
                  type="submit"
                  className=" rounded-5"
                >
                  Submit
                </Button>
              </Form>
              );
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
