import { LinkButton } from "@components/buttons";

export default function Card({
  imageSrc,
  imageAlt,
  cardText,
  cardTitle,
  buttonText,
}) {
  return (
    <>
      <div className="container w-56 mx-auto p-3 border border-gray-400 rounded-md flex">
        <div className="text-slate">
          <img
            src={imageSrc ? imageSrc : "#"}
            className=""
            alt={imageAlt ? imageAlt : "..."}
          />
          <div className="p-1">
            <h5 className="p-1">{cardTitle ? cardTitle : "Card Title"}</h5>
            <p className="p-1 pb-3">{cardText}</p>
            <LinkButton target={"#"} text={buttonText} />
          </div>
        </div>
      </div>
    </>
  );
}
