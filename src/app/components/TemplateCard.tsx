import { Template } from "@/types/template";


type TemplateCardProps = {
  template: Template;
};

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="template-card">
        <h2>{template.name}</h2>
        <p>{template.description}</p>
        <small>
            Created: {new Date(template.created).toLocaleDateString()}
        </small>
        <p>
            Categories: {template.category.join(', ')}
        </p>
    </div>
  );
}
