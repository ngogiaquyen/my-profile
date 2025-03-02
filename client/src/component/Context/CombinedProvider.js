import { LoginProvider } from "./LoginProvider";
import { ModalOverLayProvider } from "./ModalOverLayProvider";
import { ScrollEventProvider } from "./ScrollEventProvider";
import { SocketProvider } from "./SocketProvider";

function CombinedProvider({ children }) {
  return (
    <ModalOverLayProvider>
      <LoginProvider>
        <SocketProvider>
          <ScrollEventProvider>{children}</ScrollEventProvider>
        </SocketProvider>
      </LoginProvider>
    </ModalOverLayProvider>
  );
}

export default CombinedProvider;
