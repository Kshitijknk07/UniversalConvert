import { useState, useEffect } from "react";
import { Dream } from "./types";
import { api } from "./services/api";
import { DreamList } from "./components/dreams/DreamList";
import { DreamForm } from "./components/dreams/DreamForm";
import { Dialog } from "./components/ui/dialog";
import { Button } from "react-day-picker";

function App() {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedDream, setSelectedDream] = useState<Dream | null>(null);

  useEffect(() => {
    loadDreams();
  }, []);

  const loadDreams = async () => {
    const fetchedDreams = await api.getDreams();
    setDreams(fetchedDreams);
  };

  const handleCreateDream = async (
    dream: Omit<Dream, "id" | "userId" | "createdAt" | "updatedAt">
  ) => {
    await api.createDream(dream);
    await loadDreams();
    setIsFormOpen(false);
  };

  const handleEditDream = (dream: Dream) => {
    setSelectedDream(dream);
    setIsFormOpen(true);
  };

  const handleDeleteDream = async (id: string) => {
    await api.deleteDream(id);
    await loadDreams();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dream Journal</h1>
        <Button onClick={() => setIsFormOpen(true)}>New Dream</Button>
      </header>

      <DreamList
        dreams={dreams}
        onEdit={handleEditDream}
        onDelete={handleDeleteDream}
      />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <div className="dialog-content">
          <div className="dialog-header">
            <h2 className="dialog-title">
              {selectedDream ? "Edit Dream" : "Create New Dream"}
            </h2>
          </div>
          <DreamForm
            initialDream={selectedDream || undefined}
            onSubmit={handleCreateDream}
          />
        </div>
      </Dialog>
    </div>
  );
}

export default App;
