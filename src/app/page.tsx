import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "burmalda",
  description: "cait po burmalde",
};

export default function Home() {
  return (
    <div>
      <h1>Статьи о бурмалде</h1>
      <Link href="/articles">ссылка на бурмалду</Link>
    </div>
  );
}
