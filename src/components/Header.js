import React, { useEffect, useState } from "react"
import { HeaderStyle, MobileNavStyle, NavBarStyle } from "../../styles/LandingPageStyle"
import Link from "next/link"
import { Menu } from "@material-ui/icons"
import IntroDiv from "./IntroDiv"
const Header = () => {
    const [address, setAddress] = useState("")
    const [connect, setConnect] = useState("Connect Wallet")

    useEffect(() => {
        if (address !== "") {
            setConnect("Connected")
        }
    }, [address])
    console.log(address)
    const connectWallet = async () => {
        try {
            if (typeof window.ethereum !== "undefined") {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                setAddress(accounts[0])
                setConnect("Connected")
                console.log(window.ethereum)
            } else {
                alert("Please install metamask")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const [nav, setNav] = useState(true)
    const navFunction = () => {
        setNav(!nav)
    }

    return (
        <>
            <NavBarStyle>
                <HeaderStyle>
                    <h2>ZAMPS</h2>
                    <ul className="desktop-nav">
                        <li className="connect-btn" onClick={connectWallet}>
                            {connect}
                        </li>
                    </ul>
                    <div className="menu">
                        <Menu onClick={navFunction} />
                    </div>
                </HeaderStyle>
                <MobileNavStyle>
                    <div className={`${nav ? "hide-nav" : "mobile-nav"} nav`}>
                        <ul>
                            <li className="connect-btn" onClick={connectWallet}>
                                Connect Wallet
                            </li>
                        </ul>
                    </div>
                </MobileNavStyle>
            </NavBarStyle>
            <IntroDiv address={address} />
        </>
    )
}

export default Header
