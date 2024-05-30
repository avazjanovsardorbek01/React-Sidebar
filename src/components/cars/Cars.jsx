import { useState } from "react";
import UserModal from "../Modal";
import "./cars.css";
const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);
  // const openModal = () => {
  //   setModal(true);
  // };
  return (
    <>
      <UserModal open={modal} toogle={() => setModal(false)} />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10 offset-1">
            <div className="row">
              <div className="col-4">
                <button
                  className="btn btn-success"
                  onClick={() => setModal(true)}
                >
                  Open Modal
                </button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <table>
            <thead>
              <tr>
                <td>T/R</td>
                <td>Name</td>
                <td>Price</td>
                <td>Year</td>
                <td>Color</td>
                <td>Brand</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cars.map((item, inedx) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{index.name}</td>
                  <td>{index + price}</td>
                  <td>{index + year}</td>
                  <td>{index + color}</td>
                  <td>{index + brand}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-info">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button className="btn btn-danger">
                        <i className="fa-solid fa-trash-can"></i>{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cars;
