import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Candidate, StatusType } from "@/types";
import type { CandidatesContext, UpdateStatusVars } from "./interface";
import { getCandidates, updateCandidateStatus } from "@/api";

const useCandidates = () => {
  const queryClient = useQueryClient();

  const {
    data: candidates = [],
    isLoading,
    isError,
    error,
  } = useQuery<Candidate[], Error>({
    queryKey: ["candidates"],
    queryFn: getCandidates,
  });

  const mutation = useMutation({
    mutationFn: ({ id, status }: UpdateStatusVars) =>
      updateCandidateStatus(id, status),

    onMutate: async ({ id, status }: UpdateStatusVars) => {
      await queryClient.cancelQueries({ queryKey: ["candidates"] });

      const previous = queryClient.getQueryData<Candidate[]>(["candidates"]);

      queryClient.setQueryData<Candidate[]>(["candidates"], (old) =>
        old?.map((c) => (c.id === id ? { ...c, status } : c)),
      );

      return { previous };
    },

    onError: (_err, _vars, context: CandidatesContext | undefined) => {
      if (context?.previous) {
        queryClient.setQueryData(["candidates"], context.previous);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["candidates"] });
    },
  });

  const updateStatus = (id: number, status: StatusType) => {
    mutation.mutate({ id, status });
  };

  return {
    candidates,
    isLoading,
    isError,
    error,
    updateStatus,
  };
};

export default useCandidates;
