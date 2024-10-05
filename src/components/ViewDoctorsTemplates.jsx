import React, { useState } from "react";

function ViewDoctorsTemplates({
  doctors,
  setDoctors,
  templates,
  doctorTemplates,
  setDoctorTemplates,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const getTemplateName = (templateId) => {
    const template = templates.find((t) => t.id === templateId);
    return template ? template.name : "No template assigned";
  };

  const handleUnassign = (doctorId) => {
    const updatedDoctorTemplates = doctorTemplates.filter(
      (dt) => dt.doctorId !== doctorId
    );
    setDoctorTemplates(updatedDoctorTemplates);
  };

  const handleDeleteDoctor = (doctorId) => {
    const updatedDoctors = doctors.filter((d) => d.id !== doctorId);
    setDoctors(updatedDoctors);
    const updatedDoctorTemplates = doctorTemplates.filter(
      (dt) => dt.doctorId !== doctorId
    );
    setDoctorTemplates(updatedDoctorTemplates);
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
        <h2 className="text-2xl font-semibold leading-tight mb-4">
          Doctors and Assigned Templates
        </h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full rounded border border-gray-400 p-2 text-sm"
            placeholder="Search Doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Card view for mobile */}
        <div className="md:hidden space-y-4">
          {filteredDoctors.map((doctor) => {
            const assignedTemplate = doctorTemplates.find(
              (dt) => dt.doctorId === doctor.id
            );
            return (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <h3 className="font-bold text-lg mb-2">{doctor.name}</h3>
                <p className="text-sm text-gray-600">
                  Organization: {doctor.organization}
                </p>
                <p className="text-sm text-gray-600">
                  Speciality: {doctor.speciality}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Assigned Template:{" "}
                  {assignedTemplate
                    ? getTemplateName(assignedTemplate.templateId)
                    : "No template assigned"}
                </p>
                <button
                  className="mt-4  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm w-full"
                  onClick={() => handleUnassign(doctor.id)}
                >
                  Unassign Template
                </button>
              </div>
            );
          })}
        </div>

        {/* Table view for larger screens */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-300">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Doctor Name
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Organization
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Speciality
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Assigned Template
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.map((doctor) => {
                  const assignedTemplate = doctorTemplates.find(
                    (dt) => dt.doctorId === doctor.id
                  );
                  return (
                    <tr key={doctor.id} className="border-t border-gray-200">
                      <td className="px-4 py-2">{doctor.name}</td>
                      <td className="px-4 py-2">{doctor.organization}</td>
                      <td className="px-4 py-2">{doctor.speciality}</td>
                      <td className="px-4 py-2">
                        {assignedTemplate
                          ? getTemplateName(assignedTemplate.templateId)
                          : "No template assigned"}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                          onClick={() => handleUnassign(doctor.id)}
                        >
                          Unassign
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDoctorsTemplates;
