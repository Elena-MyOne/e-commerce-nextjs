import FormSubmitButton from "../UI/buttons/FormSubmitButton";
import { TfiEmail } from "react-icons/tfi";

export default function SubscribeForm() {
  return (
    <section className="m-auto rounded-xl bg-primary p-5 md:container lg:p-10">
      <form className="flex items-center justify-between">
        <h2 className="mb-3 max-w-[350px] font-custom text-2xl font-bold text-base-100">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <fieldset className="flex flex-col gap-4">
          <div className="relative">
            <input
              required
              name="email"
              type="email"
              placeholder="Email address"
              className="h-11 rounded-full p-2 pl-11"
            />
            <div className="absolute left-4 top-3 text-lg text-gray-400">
              <TfiEmail />
            </div>
          </div>

          <FormSubmitButton className="bg-base-100 px-5 hover:btn-secondary">
            Subscribe to Newsletter
          </FormSubmitButton>
        </fieldset>
      </form>
    </section>
  );
}
