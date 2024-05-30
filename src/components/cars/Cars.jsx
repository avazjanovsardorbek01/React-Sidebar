import { useState } from "react";
import UserModal from "../Modal";
import "./cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <>
      <UserModal
        open={modal}
        toggle={() => setModal(false)}
        cars={cars}
        setCars={setCars}
      />
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
          <div className="col-md-10 offset-1">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Year</th>
                  <th>Color</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>{item.brand}</td>
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
      </div>
    </>
  );
};

export default Cars;
