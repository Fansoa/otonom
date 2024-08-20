import Button from "@/components/Button/index.tsx";
import Drawer from "@/components/Drawer/index.tsx";
import { DrawerFormProps } from "@/components/DrawerForm/types.ts";
import React from "react";
import { Form, FormProvider } from "react-hook-form";

export const DrawerForm = ({
  panelTitle,
  isOpen,
  setIsOpen,
  methods,
  children,
  onSubmit,
}: DrawerFormProps) => {
  return (
    <Drawer panelTitle={panelTitle} isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormProvider {...methods}>
        <Form className="h-full">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">{children}</div>
            <div className="flex gap-3">
              <Button
                type="button"
                label="Cancel"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              />
              <Button type="submit" label="Submit" onClick={onSubmit} />
            </div>
          </div>
        </Form>
      </FormProvider>
    </Drawer>
  );
};
