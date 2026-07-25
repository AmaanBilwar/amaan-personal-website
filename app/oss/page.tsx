import type { Metadata } from "next";
import OssClient from "@/components/OssClient";
import { getOssContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "oss | amaan",
  description: "Open source contributions by Amaan.",
};

export default function OssPage() {
  const oss = getOssContent();
  return (
    <OssClient title={oss.title} description={oss.description} items={oss.items ?? []} />
  );
}
