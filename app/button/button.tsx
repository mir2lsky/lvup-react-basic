import clsx from "clsx";

export default function Button({
  kind = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "default" | "important" | "reference";
}) {
  return (
    <button
      className={clsx("rounded-lg px-3 py-1 text-sm font-medium", {
        "bg-gray-500 text-while hover:bg-gray-700": kind === "default",
        "bg-red-500 text-while hover:bg-red-700": kind === "important",
        "bg-blue-500 text-while hover:bg-blue-700": kind === "reference",
      })}
      {...props}
    />
  );
}
