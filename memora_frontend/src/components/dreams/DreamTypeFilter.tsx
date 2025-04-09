import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface DreamTypeFilterProps {
  selectedType: string | null;
  onTypeSelect: (type: string | null) => void;
}

const dreamTypes = [
  { label: "All", value: null },
  { label: "Regular", value: "regular" },
  { label: "Lucid", value: "lucid" },
  { label: "Nightmare", value: "nightmare" },
  { label: "Fantasy", value: "fantasy" },
] as const;

export const DreamTypeFilter = ({
  selectedType,
  onTypeSelect,
}: DreamTypeFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {dreamTypes.map((type) => (
        <Button
          key={type.label}
          onClick={() => onTypeSelect(type.value)}
          variant={selectedType === type.value ? "default" : "outline"}
          className={cn(
            "min-w-[100px]",
            selectedType === type.value && "bg-primary text-primary-foreground"
          )}
        >
          {type.label}
        </Button>
      ))}
    </div>
  );
};
