import { useState } from "react";
import { Dream } from "../../types";
import { DreamCard } from "./DreamCard";
import { DreamTypeFilter } from "./DreamTypeFilter";

interface DreamListProps {
  dreams: Dream[];
  onEdit: (dream: Dream) => void;
  onDelete: (id: string) => void;
}

export const DreamList = ({ dreams, onEdit, onDelete }: DreamListProps) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredDreams = selectedType
    ? dreams.filter((dream) => dream.type === selectedType)
    : dreams;

  return (
    <div className="space-y-4">
      <DreamTypeFilter
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDreams.map((dream) => (
          <DreamCard
            key={dream.id}
            dream={dream}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
