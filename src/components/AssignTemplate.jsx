import React, { useState } from "react";

function AssignTemplate({
  doctors,
  templates,
  doctorTemplates,
  setDoctorTemplates,
}) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctorId = parseInt(selectedDoctor);
    const templateId = parseInt(selectedTemplate);

    const updatedDoctorTemplates = doctorTemplates.filter(
      (dt) => dt.doctorId !== doctorId
    );
    updatedDoctorTemplates.push({ doctorId, templateId });

    setDoctorTemplates(updatedDoctorTemplates);
    setSelectedDoctor("");
    setSelectedTemplate("");
    setMessage("Template assigned successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Assign Template to Doctor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="doctor"
          >
            Select Doctor:
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="template"
          >
            Select Template:
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="template"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            required
          >
            <option value="">Select a template</option>
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            type="submit"
          >
            Assign Template
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 border border-green-400 rounded">
          {message}
        </div>
      )}
    </div>
  );
}

export default AssignTemplate;
