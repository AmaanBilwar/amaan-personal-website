import type { Metadata } from "next";
import OssClient from "@/components/oss-client";
import { getOssContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "oss | amaan",
  description: "Open source contributions by Amaan.",
};

export default function OssPage() {
  const oss = getOssContent();
  return <OssClient title={oss.title} items={oss.items} />;
}
