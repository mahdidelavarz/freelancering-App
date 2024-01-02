import React from "react";
import RHFSelect from "../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import {useQueryClient} from "@tanstack/react-query";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
function ChangeProposalStatus(proposalId, onClose) {
  const options = [
    {
      label: "رد شده",
      value: 0,
    },
    {
      label: "درانتظار تایید",
      value: 1,
    },
    {
      label: "تایید شده",
      value: 2,
    },
  ];
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();
  const onSubmit = (data) => {
    console.log(data);
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose(),
            queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };
  return (
    <div>
      <form>
        <RHFSelect
          onSubmit={handleSubmit(onSubmit)}
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div className="mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn__primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
