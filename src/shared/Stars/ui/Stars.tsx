import { colors } from "@/shared/constants/colors";
import cls from "./Stars.module.scss";

import { Star } from "lucide-react";
interface StarsProps {
  count: string | number;
}

export default function Stars({ count }: StarsProps) {
  return (
    <div className={cls.stars}>
      <Star color={colors.gold} size={20} />

      <span>{count}</span>
    </div>
  );
}
