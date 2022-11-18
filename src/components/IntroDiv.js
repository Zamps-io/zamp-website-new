import React, { useEffect, useState } from "react"
import { Button, notification } from "antd"
import { IntroStyle } from "../../styles/LandingPageStyle"
import { ethers } from "ethers"
import { zampsContractAddress } from "../../constants/contractAddress"
import { abi } from "../../constants/abi"
import Image from 'next/image'
const IntroDiv = ({ address }) => {
    const [businessCardAddress, setBusinessCardAddress] = useState("")
    const [businessAddess, setBusinessAddress] = useState(false)
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        if (businessCardAddress !== "") {
            setBusinessAddress(true)
        }
    }, [businessCardAddress])
    //This generates a business Card Address
    const generate = async () => {
        if (address === "" || address === "undefined" || address === "null") {
            notification.error({
                description: "Please connect to your wallet",
            })
        } else {
            setLoader(true)
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(zampsContractAddress, abi, signer)
            const response = await contract.create(address)
            response.wait(1)
            console.log(response)
            checkEvents()
            notification.info({
                description: "Please wait while Metamask completes the transaction",
            })
            console.log(checkEvents())
            setLoader(false)
        }
    }
    //Check for events
    const checkEvents = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(zampsContractAddress, abi, provider)
        contract.on("Created", (_tokenAddress) => {
            setBusinessCardAddress(JSON.stringify(_tokenAddress))
        })
        return true
    }
    return (
        <IntroStyle>
            <div>
                <div className="text">
                    <p>Client Sourced</p>
                    <p className="marketing">Marketing</p>
                </div>
                <p className="business">Business Marketing Reinvented. Don&apos;t pay for</p>
                <p className="business">marketing get paid by marketing</p>
                <br></br>
                <div className="btn">
                    <Button className="learn btn">Learn More</Button>
                    <Button loading={loader} className="mint btn" onClick={generate}>
                        Generate
                    </Button>
                </div>
                {businessAddess ? (
                    <div>
                        <h3>Business Card Contract Address</h3>
                        <p>{businessCardAddress}</p>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="img-card">
                <Image
                    src={"/card.png"}
                    height="400"
                    width="700"
                    objectFit="contain"
                    loader={() => "/card.png"}
                    alt="card"
                />
            </div>
        </IntroStyle>
    )
}

export default IntroDiv
