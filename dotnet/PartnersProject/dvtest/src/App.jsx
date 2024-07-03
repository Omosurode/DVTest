import React, { useState } from "react";
import "./App.css";
import personasService from "./Services/PersonasService";
import userService from "./Services/usuarioService";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { registroSchema } from "./Schemas/RegistroSchema";

const initialValues = {
  nombres: "",
  apellidos: "",
  numeroID: "",
  email: "",
  tipoID: "",
  usuario: "",
  pass: "",
};

function App() {
  const [mappedPersonas, setmappedPersonas] = useState([]);
  const [verPersonasClicked, setverPersonasClicked] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ usuario: " ", pass: " " });

  function onGetPersonas() {
    personasService.getPersonas().then((res) => {
      console.log(res);

      setverPersonasClicked(true);

      let mappedPersonasArray = res.map((persona) => (
        <tr key={persona.id}>
          <th scope="row">{persona.id}</th>
          <td>{persona.nombres}</td>
          <td>{persona.apellidos}</td>
          <td>{persona.numeroID}</td>
          <td>{persona.email}</td>
          <td>{persona.tipoID}</td>
          <td>{persona.creadoEn}</td>
          <td>{persona.numeroTipoID}</td>
          <td>{persona.nombreCompleto}</td>
        </tr>
      ));

      setmappedPersonas(mappedPersonasArray);
    });
  }

  const handleLoginUpdate = (e) => {
    const target = e.target;

    const newUserValue = target.value;

    const nameOfField = target.name;

    console.log(nameOfField);

    setLoginInfo((prevState) => {
      const newUserObject = {
        ...prevState,
      };

      newUserObject[nameOfField] = newUserValue;

      return newUserObject;
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let loginSuccess = false;

    userService.loginUser(loginInfo).then((res) => {
      loginSuccess = res;

      console.log(loginSuccess);

      if (loginSuccess) {
        alert("Correct login information");
      } else {
        alert("Incorrect login information, try again");
      }
    });
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: registroSchema,
    onSubmit: (values, action) => {
      console.log("SubmitForm");

      let newPersona = {
        nombres: values.nombres,
        apellidos: values.apellidos,
        numeroID: values.numeroID,
        email: values.email,
        tipoID: values.tipoID,
        usuario: values.usuario,
        pass: values.pass,
      };

      personasService.addPersona(newPersona);
      action.resetForm();
    },
  });

  return (
    <div className="App">
      <div>
        <section
          className="p-5 w-100"
          style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
        >
          <div className="row">
            <div className="col-12">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mt-4">
                        Registrar persona
                      </p>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col text-left">
                            <label htmlFor="nombres" className="form-label">
                              Nombres
                            </label>
                            <input
                              id="nombres"
                              name="nombres"
                              className="form-control"
                              value={values.nombres}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.nombres && touched.nombres ? (
                              <small className="text-danger mt-1">
                                {errors.nombres}
                              </small>
                            ) : null}
                          </div>
                          <div className="col text-left">
                            <label htmlFor="apellidos`" className="form-label">
                              Apellidos
                            </label>
                            <input
                              id="apellidos"
                              name="apellidos"
                              className="form-control"
                              value={values.apellidos}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.apellidos && touched.apellidos ? (
                              <small className="text-danger mt-1">
                                {errors.apellidos}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col text-left">
                            <label htmlFor="numeroID" className="form-label">
                              Numero de identificacion
                            </label>
                            <input
                              id="numeroID"
                              name="numeroID"
                              className="form-control"
                              value={values.numeroID}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.numeroID && touched.numeroID ? (
                              <small className="text-danger mt-1">
                                {errors.numeroID}
                              </small>
                            ) : null}
                          </div>
                          <div className="col text-left">
                            <label htmlFor="tipoID`" className="form-label">
                              Tipo de identificacion
                            </label>
                            <input
                              id="tipoID"
                              name="tipoID"
                              className="form-control"
                              value={values.tipoID}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.tipoID && touched.tipoID ? (
                              <small className="text-danger mt-1">
                                {errors.tipoID}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col text-left">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              className="form-control"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                              <small className="text-danger mt-1">
                                {errors.email}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col text-left">
                            <label htmlFor="usuario" className="form-label">
                              usuario
                            </label>
                            <input
                              id="usuario"
                              name="usuario"
                              className="form-control"
                              value={values.usuario}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.usuario && touched.usuario ? (
                              <small className="text-danger mt-1">
                                {errors.usuario}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col text-left">
                            <label htmlFor="pass" className="form-label">
                              Contraseña
                            </label>
                            <input
                              id="pass"
                              name="pass"
                              className="form-control"
                              value={values.pass}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="pass"
                            />
                            {errors.pass && touched.pass ? (
                              <small className="text-danger mt-1">
                                {errors.pass}
                              </small>
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col text-right actionButtons">
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={resetForm}
                            >
                              Limpiar
                            </Button>

                            <Button
                              variant="success"
                              size="sm"
                              onClick={handleSubmit}
                            >
                              Registrar
                            </Button>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <br />
                          <Button variant="primary" onClick={onGetPersonas}>
                            Ver personas
                          </Button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 align-items-center order-1 order-lg-2">
                      <p className="text-center h1 fw-bold mb-5 mt-4">
                        Ingresar
                      </p>
                      <form onSubmit={handleLogin} className="w-50 ">
                        <div className="form-group">
                          <label htmlFor="username">Usuario</label>
                          <input
                            type="text"
                            name="usuario"
                            className="form-control"
                            id="username"
                            onChange={handleLoginUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="loginpass">Contraseña</label>
                          <input
                            type="password"
                            name="pass"
                            className="form-control"
                            id="loginpass"
                            onChange={handleLoginUpdate}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary mt-5">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {mappedPersonas.length !== 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">NumeroID</th>
                        <th scope="col">Email</th>
                        <th scope="col">TipoID</th>
                        <th scope="col">Creado en</th>
                        <th scope="col">NumeroTipoID</th>
                        <th scope="col">Nombre Completo</th>
                      </tr>
                    </thead>
                    <tbody>{mappedPersonas}</tbody>
                  </table>
                ) : (
                  verPersonasClicked && <p>No se encontraron personas</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
