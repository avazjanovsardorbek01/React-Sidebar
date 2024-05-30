import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const UserModal = ({ open, toggle }) => {
  const handleSubmit = (e) => {
    e.preventDeafault();
  };
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h1 className="text-center">Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control my-2"
          />
          <input
            type="number"
            placeholder="Price"
            name="Price"
            className="form-control my-2"
          />
          <input
            type="date"
            placeholder="Year"
            name="year"
            className="form-control my-2"
          />
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="form-control my-2"
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={toggle}>
          cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
