import { LoginProvider } from "./LoginProvider";
import { ModalOverLayProvider } from "./ModalOverLayProvider";
import { SocketProvider } from "./SocketProvider";

function CombinedProvider({ children }) {
  return (
    <ModalOverLayProvider>
      <LoginProvider>
        <SocketProvider>{children}</SocketProvider>
      </LoginProvider>
    </ModalOverLayProvider>
  );
}

export default CombinedProvider;
