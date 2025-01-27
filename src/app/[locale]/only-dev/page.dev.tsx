import { useTranslations } from "next-intl";

export default function OnlyDev() {
  const t = useTranslations("OnlyDev");
  return <h1>{t("title")}</h1>;

  // return <h1>No next-intl - Only dev</h1>;
}
