import { LoginProvider } from "./LoginProvider";
import { ModalOverLayProvider } from "./ModalOverLayProvider";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { SocketProvider } from "./SocketProvider";
>>>>>>> ced8403 (chat backend)
>>>>>>> 4ba7f15 (chat backend)

function CombinedProvider({ children }) {
  return (
    <ModalOverLayProvider>
<<<<<<< HEAD
      <LoginProvider>{children}</LoginProvider>
=======
<<<<<<< HEAD
      <LoginProvider>{children}</LoginProvider>
=======
      <LoginProvider>
        <SocketProvider>{children}</SocketProvider>
      </LoginProvider>
>>>>>>> ced8403 (chat backend)
>>>>>>> 4ba7f15 (chat backend)
    </ModalOverLayProvider>
  );
}

export default CombinedProvider;
