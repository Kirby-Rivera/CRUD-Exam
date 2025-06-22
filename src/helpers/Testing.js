import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useLogout } from "./useLogout";
import { cookies } from "./CookieHelper";

function Testing() {
  const { logout } = useLogout();
  const auth = cookies.get("SESSION_COOKIE");
  const [modalOpen, setModalOpen] = useState(!auth || auth);

  return (
    <>
      {/* Your secure content */}
      <Modal
        centered
        isOpen={modalOpen}
        toggle={() => {
          setModalOpen(false);
          logout();
        }}
      >
        <ModalHeader
          toggle={() => {
            setModalOpen(false);
            logout();
          }}
        >
          Access Denied
        </ModalHeader>
        <ModalBody>
          Your session may have expired or you don’t have permission to access
          this resource.
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              setModalOpen(false);
              logout();
            }}
          >
            Logout
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Testing;
