import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { Animator, AnimatorGeneralProvider } from "@arwes/animation";

import { Button, FrameLines } from "@arwes/core";

const ModalContent = ({ closeModal }) => {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

  return (
    <ArwesThemeProvider>
      <AnimatorGeneralProvider
        animator={{
          duration: { enter: 200, exit: 200 },
        }}
      >
        <StylesBaseline
          styles={{
            "html, body": { fontFamily: FONT_FAMILY_ROOT },
            "code, pre": { fontFamily: FONT_FAMILY_CODE },
          }}
        />
        <Animator
          animator={{
            manager: "stagger",
            combine: true,
            duration: { stagger: 100 },
          }}
        >
          <Button FrameComponent={FrameLines} onClick={closeModal}>
            Close Modal
          </Button>
        </Animator>
      </AnimatorGeneralProvider>
    </ArwesThemeProvider>
  );
};

export default ModalContent;
