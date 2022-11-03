
import IntroDiv from "../src/components/IntroDiv";
import UserWebLayout from "../src/components/UserWebLayout";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <UserWebLayout webtitle="Home Page">
      <div style={{ backgroundColor: "#000" , minHeight:'100vh'}}>
        <Header/>
        <IntroDiv />
      </div>
    </UserWebLayout>
  );
}
