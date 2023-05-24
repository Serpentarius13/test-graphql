import { ArrowDown, ArrowUp } from "lucide-react";
import cls from "./Navigator.module.scss";
import {  RefObject } from "react";
import { sleep } from "@/features/sleep";

export default function Navigator({
  container,
}: {
  container: RefObject<HTMLElement>;
}) {
  function scrollTop() {
    sleep(200).then(
      () =>
        container.current &&
        container.current.scrollIntoView({ behavior: "smooth" })
    );
  }

  function scrollBottom() {
    sleep(200).then(
      () =>
        container.current &&
        container.current.scrollIntoView({ behavior: "smooth", block: "end" })
    );
  }
  return (
    <aside>
      <nav className={cls.navigator}>
        <button onClick={scrollTop}>
          <ArrowUp />
        </button>

        <button>
          <ArrowDown onClick={scrollBottom} />
        </button>
      </nav>{" "}
    </aside>
  );
}
