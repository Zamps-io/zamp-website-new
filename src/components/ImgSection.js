import React from "react"
import Image from "next/image"
const ImageSection = () => {
    return (
        <div>
            <h2 style={{ textAlign: "center", color: "#fff" }}>PROJECT IMAGE DEMO</h2>
            <div className="img-section">
                <Image
                    src={"/pic1.png"}
                    height="700"
                    width="1500"
                    objectFit="contain"
                    loader={() => "/pic1.png"}
                    alt="Pic1"
                />
            </div>
            <div className="img-section">
                <Image
                    src={"/pic2.png"}
                    height="700"
                    width="1500"
                    objectFit="contain"
                    loader={() => "/pic2.png"}
                    alt="Pic2"
                />
            </div>
            <div className="img-section">
                <Image
                    src={"/pic3.png"}
                    height="700"
                    width="1500"
                    objectFit="contain"
                    loader={() => "/pic3.png"}
                    alt="Pic3"
                />
            </div>
            <div className="img-section">
                <Image
                    src={"/pic4.png"}
                    height="700"
                    width="1500"
                    objectFit="contain"
                    loader={() => "/pic4.png"}
                    alt="Pic4"
                />
            </div>
            <div className="img-section">
                <Image
                    src={"/pic5.png"}
                    height="700"
                    width="1500"
                    objectFit="contain"
                    loader={() => "/pic5.png"}
                    alt="Pic5"
                />
            </div>
        </div>
    )
}

export default ImageSection
