import { useState } from "react";

const CategoryIcons = {
  "E-commerce Solutions": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-[var(--sec)]"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
  ),
  "Reliability & Ops": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-[var(--sec)]"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
  ),
  "Tech Leadership": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-[var(--sec)]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "E-commerce Solutions": [
      "Salesforce Commerce Cloud (B2C) platforms",
      "REST APIs & integrations (OMS, CRM, ERP, IAM)",
      "Payment gateway design & development (Adyen, Stripe)",
    ],
    "Reliability & Ops": [
      "Async reconciliation & graceful degradation",
      "Production troubleshooting on high-traffic systems",
      "CI/CD pipelines for build & deployment automation",
    ],
    "Tech Leadership": [
      "Translating business requirements into technical solutions",
      "Architecture decisions & cost/benefit trade-offs",
      "Code review & mentoring junior engineers",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I actually do
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;
          return (
            <li key={category} className="w-full">
              <div className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl border border-[var(--white-icon-tr)] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleItem(category)}
                  aria-expanded={isOpen}
                  className="flex items-center gap-3 p-4 w-full text-left hover:bg-opacity-80 transition-all cursor-pointer"
                >
                  {CategoryIcons[category as keyof typeof CategoryIcons]}
                  <div className="flex items-center gap-2 flex-grow justify-between">
                    <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                      <span className="block truncate text-[var(--white)] text-lg">
                        {category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 px-4 ${
                    isOpen ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-center pl-1">
                        <span className="pr-2 text-[var(--sec)]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
