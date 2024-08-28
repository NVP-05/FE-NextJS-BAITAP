"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const route = useRouter();

  const redirect = (e: any) => {
    const selectedLanguage = e.target.value;
    route.push(selectedLanguage);
  };
  const t = useTranslations("HomePage");
  return (
    <div>
      <select onChange={redirect} name="" id="">
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
    </div>
  );
}
