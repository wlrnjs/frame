import React from "react";

interface Section {
  title: string;
  content?: string;
  list?: string[];
}

const Terms = ({ data }: { data: Section[] }) => {
  return (
    <div>
      {data.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
          {section.content && <p className="text-sm mb-2">{section.content}</p>}
          {section.list && (
            <ul className="list-disc list-inside text-sm text-gray-700">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Terms;
