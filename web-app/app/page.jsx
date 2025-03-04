import "../styles/reset.scss";
import Header from "@/components/Header";
import { CryptoList } from "@/components/CryptoList";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <CryptoList />
      </div>
    </div>
  );
}
