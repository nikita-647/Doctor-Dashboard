import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AssignTemplate from "./components/AssignTemplate";
import CreateTemplate from "./components/CreateTemplate";
import ViewDoctorsTemplates from "./components/ViewDoctorsTemplates";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [doctors, setDoctors] = useLocalStorage("doctors", [
    {
      id: 1,
      name: "Dr. John Doe",
      organization: "General Hospital",
      speciality: "Cardiology",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      organization: "City Clinic",
      speciality: "Pediatrics",
    },
    {
      id: 3,
      name: "Dr. Mike Johnson",
      organization: "Medical Center",
      speciality: "Neurology",
    },
  ]);

  const [templates, setTemplates] = useLocalStorage("templates", [
    {
      id: 1,
      name: "General Checkup",
      headings: ["Diagnosis", "Allergy", "Medical History"],
    },
    {
      id: 2,
      name: "Cardiology Consultation",
      headings: ["Diagnosis", "Medical History", "Medications"],
    },
    {
      id: 3,
      name: "Pediatric Assessment",
      headings: ["Diagnosis", "Immunization History", "Family History"],
    },
  ]);

  const [doctorTemplates, setDoctorTemplates] = useLocalStorage(
    "doctorTemplates",
    [
      { doctorId: 1, templateId: 2 },
      { doctorId: 2, templateId: 3 },
    ]
  );

  const headings = [
    "Diagnosis",
    "Allergy",
    "Medical History",
    "Surgical History",
    "Family/Social/Immunization History",
    "Medications",
  ];

  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ViewDoctorsTemplates
                  doctors={doctors}
                  templates={templates}
                  doctorTemplates={doctorTemplates}
                  setDoctorTemplates={setDoctorTemplates}
                />
              }
            ></Route>
            <Route
              path="/assign"
              element={
                <AssignTemplate
                  doctors={doctors}
                  templates={templates}
                  doctorTemplates={doctorTemplates}
                  setDoctorTemplates={setDoctorTemplates}
                />
              }
            ></Route>
            <Route
              path="/create"
              element={
                <CreateTemplate
                  templates={templates}
                  setTemplates={setTemplates}
                  headings={headings}
                />
              }
            ></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
