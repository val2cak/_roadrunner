import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";

const BlogItem = (props) => {
  const { url, title, description, slug } = props;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a
        className={`no-anchor-decoration no-underline text-black hover:text-black`}
      >
        <Image
          fluid
          src={url}
          className="w-full hover:opacity-80"
          alt="banner"
        />
        <h1 className="py-2 font-regular text-2xl md:text-3xl font-bold w-10/12 hover:opacity-80">
          {title}
        </h1>
        <p className="text-sm md:text-base font-regular w-9/12 hover:opacity-80">
          {description}
        </p>
      </a>
    </Link>
  );
};

export default BlogItem;
