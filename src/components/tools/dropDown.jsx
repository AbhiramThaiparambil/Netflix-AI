import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function MenuDefault({ userData, logoutAction }) {
  return (
    <Menu>
      <MenuHandler>
        <Button className="p-2  h-10  md:mt-10  md:mr-16  font-bold bg-red-400  mt-[2.5rem]   rounded-lg w-24 text-wrap text-white">
          {userData?.displayName || "User"}
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => logoutAction()}>signOut</MenuItem>
      </MenuList>
    </Menu>
  );
}
