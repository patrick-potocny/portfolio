import { createContext } from "react";

type ContextProps = {
  seenWelcomePage: boolean;
  setSeenWelcomePage: (seenWelcomePage: boolean) => void;
}

export const SeenWelcomeScreenCtx = createContext<ContextProps>({
  seenWelcomePage: false,
  setSeenWelcomePage: () => {},
});