interface PrimaryButtonProps {
  text: string;
}

export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <div className="flex justify-center pb-5 md:justify-start lg:pb-10">
      <button className="btn btn-primary rounded-full px-14 hover:btn-secondary">
        <span className="">{text}</span>
      </button>
    </div>
  );
}
