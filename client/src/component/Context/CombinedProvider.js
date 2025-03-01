import { LoginProvider } from "./LoginProvider";
import { ModalOverLayProvider } from "./ModalOverLayProvider";

function CombinedProvider({ children }) {
  return (
    <ModalOverLayProvider>
      <LoginProvider>{children}</LoginProvider>
    </ModalOverLayProvider>
  );
}

export default CombinedProvider;
