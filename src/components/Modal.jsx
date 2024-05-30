import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const UserModal = ({ open, toggle, cars, setCars }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCars([...cars, form]);
    toggle(); // Закрыть модальное окно после сохранения
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h1 className="text-center">Add Car</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Name"
            name="name"
            className="form-control my-2"
          />
          <input
            type="number"
            onChange={handleChange}
            placeholder="Price"
            name="price"
            className="form-control my-2"
          />
          <input
            type="date"
            onChange={handleChange}
            placeholder="Year"
            name="year"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Color"
            name="color"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={toggle}>
          Cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
