import React, { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

function UserRow({ index, user }) {
  const [open, setOpen] = useState(false);
  const { status } = user;
  const userStatus = [
    {
      label: "رد شده",
      class: "bg-rose-500",
    },
    {
      label: "درانتظار تایید",
      class: "bg-gray-500",
    },
    {
      label: "تایید شده",
      class: "bg-green-500",
    },
  ];
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${userStatus[status].class}`}>
          {userStatus[status].label}
        </span>
      </td>

      <td>
        <Modal
          title="تغییر وضعیت کاربر "
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
