import EditFilePage from "@/components/dashboard/files/editfile/EditFilePage";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <EditFilePage id={id} />
    </div>
  );
};

export default Page;
