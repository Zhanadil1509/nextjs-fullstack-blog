import Links from "@/components/navbar/links/Links";

type Props = {};
export default function Navbar({}: Props) {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
