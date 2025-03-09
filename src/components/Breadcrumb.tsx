interface IProps {
  label: string;
  href: string;
}
export function Breadcrumb({ label, href }: IProps) {
  return (
    <nav>
      <h1 className="text-custom-gray-500 text-xs">
        {label} &gt; <span className="font-semibold"> {href}</span>
      </h1>
    </nav>
  );
}
