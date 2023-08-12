import { LinkButton } from "@components/buttons";

export default function Card({
  imageSrc,
  imageAlt,
  cardText,
  cardTitle,
  buttonText,
  link,
  target,
  rel,
}) {
  return (
    <>
      <div className="container w-56 mx-auto p-3 border border-gray-400 rounded-md text-slate relative">
        {/*<img*/}
        {/*  src={imageSrc ? imageSrc : ""}*/}
        {/*  className=""*/}
        {/*  alt={imageAlt ? imageAlt : "..."}*/}
        {/*/>*/}
        <div className="grid-rows-3">
          <div className="row-span-1">
            <h5 className="p-1">{cardTitle ? cardTitle : "Card Title"}</h5>
          </div>
          <div className="row-span-1 pb-7">
            <p className="p-1 pb-3">{cardText}</p>
          </div>
          <div className="row-span-1">
            <div className="absolute bottom-4 right-4">
              <LinkButton
                target={target ? target : "_blank"}
                rel={rel ? rel : "noopener"}
                link={link}
                text={buttonText}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
