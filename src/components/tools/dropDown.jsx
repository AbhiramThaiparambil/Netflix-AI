import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
  export function MenuDefault({userData,logoutAction}) {
    return (
      <Menu>
        
        <MenuHandler>
                  <Button className="p-2  mt-14 mr-16 bg-red-500  rounded-md w-24 text-wrap text-white">{userData?.displayName||'User'}</Button>

        </MenuHandler>
        <MenuList>
          <MenuItem onClick={()=>logoutAction()}>signOut</MenuItem>
         
        </MenuList>
      </Menu>
    );
  }

  