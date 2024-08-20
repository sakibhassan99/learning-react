import errorImg from "../assets/images/error.svg";

export default function ErrorPage() {
  return (
    <section className="country-details">
      <img src={errorImg} alt={errorImg} style={{ width: "100%" }} />
    </section>
  );
}
