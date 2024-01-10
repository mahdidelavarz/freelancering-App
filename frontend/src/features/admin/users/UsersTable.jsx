import React from "react";
import useUsers from "../../users/useUsers";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import UserRow from "./UserRow";

function UsersTable() {
  const { isLoading, users } = useUsers();
  console.log(users)
  if (isLoading) return <Loading />;
  if (!users?.length) return <Empty resourceName="project" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th> نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت </th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => {
            console.log(user)
            return  <UserRow key={user._id} user={user} index={index} />
        })}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
