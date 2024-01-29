

import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"

// The number of columns change by resizing the window
const Gallery = (images: any) => {
   // console.log('sda', images, images.allFile)
    // const items = Array.from({ length: 20 }).map((_, index) => (
    //     <div
    //       key={index}
    //       style={{
    //         height: index % 2 ? "200px" : "250px",
    //         background: "#" + Math.floor(Math.random() * 16777215).toString(16),
    //         margin: "10px",
    //         borderRadius: "8px"
    //       }}
    //     />
    //   ));
    const items = images.images.allFile.edges.map((edge: { childImageSharp: { fluid: IGatsbyImageData } }, index:number) => {
       // console.log('edge', edge)
       //const image = getImage(data.blogPost.avatar)
        console.log("ssda",edge.node)
        return <GatsbyImage  image={edge.node.childImageSharp.gatsbyImageData} alt={``} key={index}      style={{
         
            margin: "10px",
           
          }}/>
     })
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="10px">
                {items}
                </Masonry>
            </ResponsiveMasonry>
        )
    }


export default Gallery
