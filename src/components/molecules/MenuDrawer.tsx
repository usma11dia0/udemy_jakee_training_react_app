import { memo, FC } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: ()=>void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {onClose, isOpen} = props;
  
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">TOP</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
