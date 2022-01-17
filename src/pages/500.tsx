import Header from "@/components/Header";

export default function Error500() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="-mt-20">
            <span className="text-xl font-light">server not found</span>
          </div>
        </div>
      </div>
    </>
  );
}
