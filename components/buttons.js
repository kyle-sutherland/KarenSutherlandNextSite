import React from "react";

const buttonStyle =
  "rounded-md bg-bosporus px-3 py-2 text-sm text-bleached-silk shadow-sm hover:bg-opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-thistle-blossom";

export function LinkButton({ link, text, target, rel }) {
  return (
    <>
      <a
        href={link ? link : "#"}
        target={target ? target : ""}
        rel={rel ? rel : ""}
        className={buttonStyle}
      >
        {text}
      </a>
    </>
  );
}

export function ActionButton({ type, text, disabled }) {
  return (
    <>
      <button className={buttonStyle} type={type} disabled={disabled}>
        {text}
      </button>
    </>
  );
}
