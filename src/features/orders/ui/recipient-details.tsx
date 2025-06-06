import { Label, TextInput } from "flowbite-react";
import { Mail, Phone, User } from "lucide-react";
import { ButtonConfirmOrder } from "./button-confirm-order";

export const RecipientDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-4 border border-indigo-300 p-4 bg-transparent rounded-lg text-indigo-500">
        <h4 className="uppercase text-xl font-medium text-indigo-900">
          recipient details
        </h4>
        <div>
          <div className="mb-2">
            <Label htmlFor="username" className="!text-indigo-700">
              Your name
            </Label>
          </div>
          <TextInput
            type="text"
            id="username"
            sizing="sm"
            placeholder="Input your name"
            required
            icon={User}
            theme={{
              base: "text-indigo-500 dark:text-indigo-500",
              field: {
                base: "group !bg-transparent ",
                icon: {
                  svg: "!text-indigo-500 ",
                },
                input: {
                  base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                },
              },
            }}
          />
        </div>
        <div>
          <div className="mb-2">
            <Label htmlFor="tel" className="!text-indigo-700">
              Phone number
            </Label>
          </div>
          <TextInput
            type="tel"
            id="tel"
            sizing="sm"
            placeholder="123 4567 890"
            required
            icon={Phone}
            theme={{
              base: "text-indigo-500 dark:text-indigo-500",
              field: {
                base: "group !bg-transparent ",
                icon: {
                  svg: "!text-indigo-500 ",
                },
                input: {
                  base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                },
              },
            }}
          />
        </div>
        <div>
          <div className="mb-2">
            <Label htmlFor="email" className="!text-indigo-700">
              Email address
            </Label>
          </div>
          <TextInput
            type="email"
            id="email"
            sizing="sm"
            placeholder="sneakers@gmai.com"
            required
            icon={Mail}
            theme={{
              base: "text-indigo-500 dark:text-indigo-500",
              field: {
                base: "group !bg-transparent ",
                icon: {
                  svg: "!text-indigo-500 ",
                },
                input: {
                  base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                },
              },
            }}
          />
        </div>
      </div>
      <ButtonConfirmOrder />
    </>
  );
};
