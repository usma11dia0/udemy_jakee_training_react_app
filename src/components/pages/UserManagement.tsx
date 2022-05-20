import { memo, FC, useEffect, useCallback } from "react";
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser} = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback((id:number) =>{
    onSelectUser({id, users, onOpen})
  }, [onOpen, onSelectUser, users]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify='center'>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto" >
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin}/> 
    </>
  );
});
