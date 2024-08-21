import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default function Home() {
  return (
    <>
      <div>Welcome To Home Page</div>
      <ClickCounter name="Click Counter" />
      <HoverCounter name="Hover Counter" />
    </>
  );
}
