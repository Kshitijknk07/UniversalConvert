import { useState } from "react";
import { Dream } from "../../types";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DatePicker } from "../ui/DatePicker";

interface DreamFormProps {
  initialDream?: Partial<Dream>;
  onSubmit: (
    dream: Omit<Dream, "id" | "userId" | "createdAt" | "updatedAt">
  ) => void;
}

type DreamType = "lucid" | "nightmare" | "fantasy" | "regular";

export const DreamForm = ({ initialDream, onSubmit }: DreamFormProps) => {
  const [dream, setDream] = useState({
    title: initialDream?.title || "",
    description: initialDream?.description || "",
    date: initialDream?.date || new Date(),
    type: (initialDream?.type as DreamType) || "regular",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(dream);
  };

  const dreamTypes = [
    { label: "Regular", value: "regular" },
    { label: "Lucid", value: "lucid" },
    { label: "Nightmare", value: "nightmare" },
    { label: "Fantasy", value: "fantasy" },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <Input
          id="title"
          value={dream.title}
          onChange={(e) => setDream({ ...dream, title: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={dream.description}
          onChange={(e) => setDream({ ...dream, description: e.target.value })}
          className="w-full min-h-[100px] p-2 border rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1">
            Type
          </label>
          <Select
            value={dream.type}
            onValueChange={(value: DreamType) =>
              setDream({ ...dream, type: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select dream type" />
            </SelectTrigger>
            <SelectContent>
              {dreamTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <DatePicker
            date={dream.date}
            onSelect={(date: Date) => setDream({ ...dream, date })}
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        {initialDream ? "Update Dream" : "Create Dream"}
      </Button>
    </form>
  );
};
