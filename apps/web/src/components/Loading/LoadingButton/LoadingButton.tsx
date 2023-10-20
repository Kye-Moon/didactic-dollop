import { Button } from "@/components/primatives/Button/Button";
import * as React from "react";
import { Spinner } from "@/components/Loading/Spinner";

interface LoadingButtonProps {
  label: string;
  loadingStatus: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | undefined;
  className?: string;
}

const LoadingButton = ({
  label,
  loadingStatus,
  type,
  className,
}: LoadingButtonProps) => {
  return (
    <Button className={className} disabled={loadingStatus} type={type}>
      {loadingStatus ? (
        <>
          <div className={"flex justify-center items-center w-16"}>
            <Spinner />
          </div>
        </>
      ) : (
        label
      )}
    </Button>
  );
};

export default LoadingButton;
