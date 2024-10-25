import FinancialTable from "..//components/FinancialTable";

const financialData = [
  {
    title: "Conservancy Operations",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      { "Cost Unit": "Vehicle purchase", "Guiding Amount": "62,000 USD" },
      {
        "Cost Unit": "Vehicle running expenses",
        "Guiding Amount": "40 USD per day",
      },
      {
        "Cost Unit": "Vehicle maintenance",
        "Guiding Amount": "20 USD per day",
      },
      { "Cost Unit": "Furniture", "Guiding Amount": "1,300 USD" },
      { "Cost Unit": "Stationery", "Guiding Amount": "40 USD per month" },
      { "Cost Unit": "Power and water", "Guiding Amount": "20 USD per day" },
    ],
  },
  {
    title: "Conservancy Infrastructure and Programs",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      {
        "Cost Unit": "Road construction (per km)",
        "Guiding Amount": "8,000 USD",
      },
      { "Cost Unit": "Bridge construction", "Guiding Amount": "5,700 USD" },
      {
        "Cost Unit": "Tree planting (per seedling)",
        "Guiding Amount": "5 USD",
      },
      { "Cost Unit": "Borehole", "Guiding Amount": "30,000 USD" },
    ],
  },
  {
    title: "Security, Rangers’ Posts, and Equipment",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      {
        "Cost Unit": "Ranger unit construction",
        "Guiding Amount": "2,000 USD",
      },
      { "Cost Unit": "Uniform and gear", "Guiding Amount": "15 USD per day" },
      { "Cost Unit": "Camera", "Guiding Amount": "400 USD" },
      { "Cost Unit": "GPS", "Guiding Amount": "180 USD" },
      { "Cost Unit": "Binoculars", "Guiding Amount": "540 USD" },
      { "Cost Unit": "Smartphone", "Guiding Amount": "200 USD" },
      {
        "Cost Unit": "Motorbike running expenses",
        "Guiding Amount": "20 USD per day",
      },
    ],
  },
  {
    title: "Community Projects - Savings Group",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      {
        "Cost Unit": "Company registration and account setup",
        "Guiding Amount": "800 USD",
      },
      { "Cost Unit": "Capitation per person", "Guiding Amount": "40 USD" },
      {
        "Cost Unit": "Outreach and education",
        "Guiding Amount": "20 USD per day",
      },
      { "Cost Unit": "Administration", "Guiding Amount": "20 USD per day" },
      { "Cost Unit": "Training", "Guiding Amount": "13 USD per day" },
    ],
  },
  {
    title: "Community Projects - Clean Water",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      {
        "Cost Unit": "Borehole drilling and equipment",
        "Guiding Amount": "30,000 USD",
      },
      { "Cost Unit": "Water tank per household", "Guiding Amount": "40 USD" },
      { "Cost Unit": "Water management", "Guiding Amount": "10 USD per day" },
    ],
  },
  {
    title: "Community Projects - Kitchen Gardens and Clean Energy",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      {
        "Cost Unit": "Setting up kitchen gardens (per household)",
        "Guiding Amount": "320 USD",
      },
      { "Cost Unit": "Extension services", "Guiding Amount": "10 USD per day" },
      {
        "Cost Unit": "Eco-jikos (clean energy stoves)",
        "Guiding Amount": "100 USD per household",
      },
      { "Cost Unit": "Training", "Guiding Amount": "26 USD per day" },
    ],
  },
  {
    title: "Conservation Education - Auditorium Construction",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      { "Cost Unit": "Vehicle purchase", "Guiding Amount": "25,000 USD" },
      { "Cost Unit": "Equipment and furniture", "Guiding Amount": "3,000 USD" },
      {
        "Cost Unit": "Administration and maintenance",
        "Guiding Amount": "40 USD per day",
      },
    ],
  },
  {
    title: "Conservation Education - Purchase of Conservation Bus",
    columns: ["Cost Unit", "Guiding Amount"],
    rows: [
      { "Cost Unit": "Bus purchase", "Guiding Amount": "55,000 USD" },
      { "Cost Unit": "Running expenses", "Guiding Amount": "30 USD per day" },
      { "Cost Unit": "Maintenance", "Guiding Amount": "20 USD per day" },
    ],
  },
];

export default function FinancialNeeds() {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-brown mb-8">
        Donations Guide
      </h1>
      {financialData.map((section, index) => (
        <FinancialTable
          key={index}
          title={section.title}
          columns={section.columns}
          rows={section.rows}
        />
      ))}
    </div>
  );
}
