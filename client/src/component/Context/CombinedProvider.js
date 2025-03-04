import { LoginProvider } from "./LoginProvider";
import { ModalOverLayProvider } from "./ModalOverLayProvider";
import { NavbarScrollProvider } from "./NavbarScrollProvider";
import { ScrolledPastProvder } from "./ScrolledPastProvder";
import { ScrollEventProvider } from "./ScrollEventProvider";
import { SocketProvider } from "./SocketProvider";

function CombinedProvider({ children }) {
  return (
    <ModalOverLayProvider>
      <LoginProvider>
        <SocketProvider>
          <ScrollEventProvider>
            <ScrolledPastProvder>
              <NavbarScrollProvider>{children}</NavbarScrollProvider>
            </ScrolledPastProvder>
          </ScrollEventProvider>
        </SocketProvider>
      </LoginProvider>
    </ModalOverLayProvider>
  );
}

export default CombinedProvider;
