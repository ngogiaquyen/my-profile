import { FetchDataProvider } from './FetchDataProvider';
import { LoadingProvider } from './LoadingProvider';
import { LoginProvider } from './LoginProvider';
import { ModalOverLayProvider } from './ModalOverLayProvider';
import { NavbarInforPrivider } from './NavbarInforPrivider';
import { NavbarScrollProvider } from './NavbarScrollProvider';
import { ScrolledPastProvder } from './ScrolledPastProvder';
import { ScrollEventProvider } from './ScrollEventProvider';
import { SocketProvider } from './SocketProvider';
import { ThemeModeProvider } from './ThemeModeProvider';
import { ToastProvider } from './ToastProvider';

function CombinedProvider({ children }) {
  return (
    <ThemeModeProvider>
      <ModalOverLayProvider>
        <ToastProvider>
          <LoginProvider>
            <LoadingProvider>
              <FetchDataProvider>
                <SocketProvider>
                  <ScrolledPastProvder>
                    <ScrollEventProvider>
                      <NavbarScrollProvider>
                        <NavbarInforPrivider>{children}</NavbarInforPrivider>
                      </NavbarScrollProvider>
                    </ScrollEventProvider>
                  </ScrolledPastProvder>
                </SocketProvider>
              </FetchDataProvider>
            </LoadingProvider>
          </LoginProvider>
        </ToastProvider>
      </ModalOverLayProvider>
    </ThemeModeProvider>
  );
}

export default CombinedProvider;
