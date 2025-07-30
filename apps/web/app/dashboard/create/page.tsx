// app/dashboard/create/page.tsx
import CreateAgentForm from "@/components/agent/CreateAgentForm";

export default function CreateAgentPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Create New Agent</h2>
      <CreateAgentForm />
    </div>
  );
}
