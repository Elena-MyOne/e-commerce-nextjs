import PrimaryButton from "@/components/UI/buttons/PrimaryButton";

export default function NotFound() {
  return (
    <section className="flex h-[70vh] flex-col items-center justify-center gap-2 text-center">
      <p className="text-xl">
        <span className="font-custom">Oops</span>,{" "}
        <span className="font-custom">Page not found</span>
      </p>
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-md mb-4 font-bold lg:mb-8">
        We are sorry, but the page you are requested was not found
      </p>
      <PrimaryButton text="Go Home" href="/" />
    </section>
  );
}
