import ProjectDetailsClient from "@/components/ProjectDetailsClient";


interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  console.log("Page id:", id);

  return (
    <div>
      <ProjectDetailsClient projectId={id} />
    </div>
  );
}
