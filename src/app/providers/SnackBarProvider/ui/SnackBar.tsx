import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

interface SnackBarProps {
  children: ReactNode;
}

export function SnackBarProvider({ children }: SnackBarProps) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={1000}
    >
      {children}
    </SnackbarProvider>
  );
}
