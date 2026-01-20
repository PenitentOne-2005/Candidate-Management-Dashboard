import { useState, useMemo } from "react";
import type { Candidate, StatusType } from "@/types";
import { useCandidates } from "@/hooks";
import { CandidateCard, CandidateModal, FilterBar } from "@/components";
import { ErrorState, LoadingState } from "@/ui";

const CandidateListPage = () => {
  const { candidates, isLoading, isError, error, updateStatus } =
    useCandidates();

  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusType | "all">("all");

  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      const matchesStatus = statusFilter === "all" || c.status === statusFilter;

      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [candidates, search, statusFilter]);

  if (isLoading) return <LoadingState />;

  if (isError) return <ErrorState message={error?.message} />;

  return (
    <div className="p-4">
      <FilterBar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        search={search}
        setSearch={setSearch}
      />

      {filteredCandidates.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No candidates found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onViewDetails={setSelectedCandidate}
            />
          ))}
        </div>
      )}

      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          isOpen={true}
          onClose={() => setSelectedCandidate(null)}
          onChangeStatus={updateStatus}
        />
      )}
    </div>
  );
};

export default CandidateListPage;
