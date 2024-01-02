import { useMutation, useQueryClient } from "@tanstack/react-query";
import {changeProposalStatusApi } from "../../services/proposalServices";
import { toast } from "react-hot-toast";
export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isUpdating, changeProposalStatus};
}
