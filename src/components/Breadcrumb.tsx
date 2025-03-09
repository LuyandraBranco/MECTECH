interface IProps {
  label: string;
  href: string;
}
export function Breadcrumb({ label, href }: IProps) {
  return (
    <nav>
      <h1 className="text-custom-gray-500 text-xs">
        {label} <span className="font-semibold"> &gt; {href}</span>
      </h1>
    </nav>
  );
}
