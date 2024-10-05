import React, { useState } from "react";

function CreateTemplate({ templates, setTemplates, headings }) {
  const [templateName, setTemplateName] = useState("");
  const [templateHeadings, setTemplateHeadings] = useState([]);
  const [selectedHeading, setSelectedHeading] = useState("");

  const addHeading = () => {
    if (selectedHeading && !templateHeadings.includes(selectedHeading)) {
      setTemplateHeadings([...templateHeadings, selectedHeading]);
      setSelectedHeading("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTemplate = {
      id: templates.length + 1,
      name: templateName,
      headings: templateHeadings,
    };
    setTemplates([...templates, newTemplate]);
    setTemplateName("");
    setTemplateHeadings([]);
  };

  return (
    <div className="bg-white shadow-md rounded mx-20 px-8 pt-6 pb-8 mb-4 mt-8 mx-30 ">
      <h2 className="text-2xl font-bold mb-4">Create Template</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="templateName"
          >
            Template Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="templateName"
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="heading"
          >
            Select Heading:
          </label>
          <div className="flex">
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mr-2"
              id="heading"
              value={selectedHeading}
              onChange={(e) => setSelectedHeading(e.target.value)}
            >
              <option value="">Select a heading</option>
              {headings.map((heading, index) => (
                <option key={index} value={heading}>
                  {heading}
                </option>
              ))}
            </select>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addHeading}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Template Headings:</h3>
          <ul className="list-disc list-inside">
            {templateHeadings.map((heading, index) => (
              <li key={index}>{heading}</li>
            ))}
          </ul>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Template
        </button>
      </form>
    </div>
  );
}

export default CreateTemplate;
