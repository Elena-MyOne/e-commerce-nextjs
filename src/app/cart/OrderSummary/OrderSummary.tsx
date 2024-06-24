import FormSubmitButton from "@/components/UI/buttons/FormSubmitButton";
import PrimaryButton from "@/components/UI/buttons/PrimaryButton";
import { formatPrice } from "@/lib/functions/formatPrice";

interface OrderSummaryProps {
  subtotal: number;
  total: number;
  discount: number;
}

export default function OrderSummary({
  subtotal,
  total,
  discount,
}: OrderSummaryProps) {
  return (
    <div className="flex-initial divide-y rounded-xl border border-gray-200 p-4 lg:w-[310px]">
      <div className="mb-2 flex flex-col gap-2">
        <h2 className="text-lg font-bold">Order Summary</h2>
        <div className="flex items-center justify-between gap-2 text-sm sm:text-base">
          <span className="text-info">Subtotal</span>
          <span className="font-semibold">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-sm sm:text-base">
          <span className="text-info">Delivery Fee</span>
          <span className="font-semibold">{formatPrice(0)}</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-sm sm:text-base">
          <span className="text-info">Discount</span>
          <span className="font-semibold text-error">
            -{formatPrice(discount)}
          </span>
        </div>
      </div>
      <div className="pt-2">
        <div className="flex items-center justify-between gap-2 text-sm sm:text-base">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">{formatPrice(total)}</span>
        </div>
        <form className="mt-6 flex gap-2">
          <div className="form-control">
            <input
              name="promoCode"
              placeholder="Add promo code"
              className="input input-bordered w-full min-w-[100px] rounded-full"
            />
          </div>
          <FormSubmitButton className="max-w-[250px] px-5">
            Apply
          </FormSubmitButton>
        </form>
        <PrimaryButton
          href="/"
          text="Go to Checkout"
          className="mt-6 w-full md:mt-12"
        />
      </div>
    </div>
  );
}
