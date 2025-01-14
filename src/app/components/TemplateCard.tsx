import { Template } from "@/types/template";
import Link from "next/link";


type TemplateCardProps = {
  template: Template;
};

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="template-card">
      <div className="template-card__content">
        <h2 className="text-[18px] font-bold">{template.name}</h2>
        <p className="text-[14px]">{template.description}</p>

        <small>
          Created: {new Date(template.created).toLocaleDateString()}
        </small>

        <p className="text-[14px]">
          Categories: {template.category.join(', ')}
        </p>
      </div>

      <div className="flex justify-start bg-gray-500 p-4">
        <Link href="{template.link}" className="text-green-400 text-[14px]">Use Template</Link>
      </div>
    </div>
  );
}
