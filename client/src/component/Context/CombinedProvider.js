import { LoginProvider } from './LoginProvider';
import { ModalOverLayProvider } from './ModalOverLayProvider';
import { NavbarInforPrivider } from './NavbarInforPrivider';
import { NavbarScrollProvider } from './NavbarScrollProvider';
import { ScrolledPastProvder } from './ScrolledPastProvder';
import { ScrollEventProvider } from './ScrollEventProvider';
import { SocketProvider } from './SocketProvider';

function CombinedProvider({ children }) {
  return (
    <ModalOverLayProvider>
      <LoginProvider>
        <SocketProvider>
            <ScrolledPastProvder>
          <ScrollEventProvider>
              <NavbarScrollProvider>
                <NavbarInforPrivider>{children}</NavbarInforPrivider>
              </NavbarScrollProvider>
          </ScrollEventProvider>
            </ScrolledPastProvder>
        </SocketProvider>
      </LoginProvider>
    </ModalOverLayProvider>
  );
}

export default CombinedProvider;
