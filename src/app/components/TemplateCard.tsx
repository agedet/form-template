import { Template } from "@/types/template";


type TemplateCardProps = {
  template: Template;
};

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="template-card">
        <h2 className="text-[18px] font-bold">{template.name}</h2>
        <p className="text-[14px]">{template.description}</p>
        <small>
          Created: {new Date(template.created).toLocaleDateString()}
        </small>
        <p className="text-[14px]">
          Categories: {template.category.join(', ')}
        </p>

        <div className="flex justify-start gap-4 bg-cyan-500">
          <button className="btn btn-primary ">use Template</button>
        </div>
    </div>
  );
}
