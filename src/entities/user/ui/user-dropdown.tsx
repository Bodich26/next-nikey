import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { ClipboardList, LogIn, LogOut, User } from "lucide-react";

export const UserDropdown = () => {
  const { user } = useUser();

  const handleSignOut = () => {
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <Dropdown
      label={<User />}
      inline
      theme={{
        arrowIcon: "ml-0",
        floating: {
          animation: "transition-opacity",
          content: "py-1 text-sm bg-indigo-50", // фон всего меню
          divider: "my-1 h-px bg-gray-50 dark:bg-indigo-100",
          header: "block px-4 py-2 text-sm text-indigo-700 dark:text-gray-700",

          item: {
            container: "",
            base: `
              flex w-full cursor-pointer items-center justify-start gap-2
              px-4 py-2 text-sm text-indigo-700 
              hover:bg-indigo-700 hover:text-indigo-50
              focus:bg-indigo-700 focus:text-indigo-50
              focus:outline-none
              dark:text-indigo-700 dark:hover:bg-indigo-700 dark:hover:text-indigo-50
              dark:focus:bg-indigo-700 dark:focus:text-indigo-50 transition-all duration-300
            `,
            icon: "mr-2 h-4 w-4",
          },

          style: {
            dark: "bg-indigo-50 text-indigo-700", // тёмная тема тоже bg-indigo-50
            light: "bg-indigo-50 text-indigo-700",
            auto: "bg-indigo-50 text-indigo-700 dark:bg-indigo-50 dark:text-indigo-700",
          },
        },
        inlineWrapper: "hover:text-indigo-400 hover-effect-icon",
      }}
    >
      {user ? (
        <>
          <DropdownItem href="/user/profile">
            <ClipboardList width={18} height={18} /> My Orders
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem
            className="!text-red-600
              hover:bg-red-200 hover:text-red-50
              focus:bg-red-200 focus:text-red-50
              focus:outline-none
              dark:text-red-200 dark:hover:bg-red-200 dark:hover:text-red-50
              dark:focus:bg-red-200 dark:focus:text-red-50 transition-all duration-300"
          >
            <SignOutButton>
              <div
                className="flex items-center gap-2"
                onClick={() => handleSignOut()}
              >
                <LogOut width={18} height={18} />
                <span>Sign Out</span>
              </div>
            </SignOutButton>
          </DropdownItem>
        </>
      ) : (
        <DropdownItem>
          <SignInButton>
            <div className="flex items-center gap-2">
              <LogIn width={18} height={18} />
              <span>Sign In</span>
            </div>
          </SignInButton>
        </DropdownItem>
      )}
    </Dropdown>
  );
};
