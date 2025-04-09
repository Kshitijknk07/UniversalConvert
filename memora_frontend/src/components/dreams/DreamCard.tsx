import { Dream } from "../../types";
import { format } from "date-fns";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface DreamCardProps {
  dream: Dream;
  onEdit: (dream: Dream) => void;
  onDelete: (id: string) => void;
}

export const DreamCard = ({ dream, onEdit, onDelete }: DreamCardProps) => {
  const typeColors = {
    lucid: "bg-blue-500",
    nightmare: "bg-red-500",
    fantasy: "bg-purple-500",
    regular: "bg-green-500",
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <h3 className="text-lg font-semibold">{dream.title}</h3>
        <Badge className={typeColors[dream.type]}>{dream.type}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{dream.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          {format(new Date(dream.date), "PPP")}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={() => onEdit(dream)}>
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(dream.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
