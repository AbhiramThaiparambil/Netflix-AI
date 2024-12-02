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
        <Button className="p-2  md:mt-10 mt-16 md:mr-16 font-thin bg-red-400  rounded-md w-24 text-wrap text-white">
          {userData?.displayName || "User"}
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => logoutAction()}>signOut</MenuItem>
      </MenuList>
    </Menu>
  );
}
