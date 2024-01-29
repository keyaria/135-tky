import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from 'react-infinite-scroll-component';

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

// The number of columns change by resizing the window
const Gallery = (images: any) => {

  const fetchMoreData = () => {
      setTimeout(() => {
         items.concat(Array.from({ length: 20 }));
      }, 1500);
  };
  const items = images.images.allFile.edges.map(
    (edge: { childImageSharp: { fluid: IGatsbyImageData } }, index: number) => {
      // console.log('edge', edge)
      //const image = getImage(data.blogPost.avatar)
      console.log("ssda", edge.node);
      return (
        <GatsbyImage
          image={edge.node.childImageSharp.gatsbyImageData}
          alt={``}
          key={index}
          style={{
            margin: "10px",
          }}
        />
      );
    },
  );
  return (
    <InfiniteScroll
    dataLength={items.length}
    next={fetchMoreData}
    hasMore={true}
    loader={<h4>Loading...</h4>}
>
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">{items}</Masonry>
    </ResponsiveMasonry>
    </InfiniteScroll>
  );

};

export default Gallery;
