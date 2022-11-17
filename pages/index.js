import UserWebLayout from "../src/components/UserWebLayout"
import Header from "../src/components/Header"
import ImageSection from "../src/components/ImgSection"

export default function Home() {
    return (
        <UserWebLayout webtitle="Home Page">
            <div style={{ backgroundColor: "#0D172A", minHeight: "100vh" }}>
                <Header />
                <ImageSection />
            </div>
        </UserWebLayout>
    )
}
