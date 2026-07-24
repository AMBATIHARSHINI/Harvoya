import { jsPDF } from "jspdf";

const downloadTripPDF = (trip) => {
  const doc = new jsPDF();

  let y = 20;

  // Remove unsupported emoji/special characters from title
  const title = trip.title.replace(/[^\x00-\x7F]/g, "").trim();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("HARVOYA", 20, y);

  y += 10;
  doc.setFontSize(16);
  doc.text("AI Trip Planner", 20, y);

  // Destination
  y += 15;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Destination: ${title}`, 20, y);

  // Budget
  y += 15;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("Budget Details", 20, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Hotel Budget: $${trip.hotelCost}`, 20, y);

  y += 10;
  doc.text(`Food Budget: $${trip.food}`, 20, y);

  y += 10;
  doc.text(`Transport Budget: $${trip.transport}`, 20, y);

  y += 10;
  doc.text(`Activities Budget: $${trip.activities}`, 20, y);

  const total =
    trip.hotelCost +
    trip.food +
    trip.transport +
    trip.activities;

  y += 10;
  doc.setFont("helvetica", "bold");
  doc.text(`Total Budget: $${total}`, 20, y);

  // Itinerary
  y += 20;
  doc.setFontSize(15);
  doc.text("Trip Itinerary", 20, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  trip.itinerary.forEach((day, index) => {
    doc.text(`Day ${index + 1}: ${day}`, 20, y);
    y += 10;

    // Prevent text from overflowing to the next page
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  // Recommended Hotel
  if (trip.recommendedHotel) {
    y += 10;

    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text("Recommended Hotel", 20, y);

    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text(`Name: ${trip.recommendedHotel.name}`, 20, y);

    y += 10;
    doc.text(`Location: ${trip.recommendedHotel.location}`, 20, y);

    y += 10;
    doc.text(`Rating: ${trip.recommendedHotel.rating}`, 20, y);

    y += 10;
    doc.text(`Price: $${trip.recommendedHotel.price} / Night`, 20, y);
  }

  // Footer
  y += 20;

  if (y > 270) {
    doc.addPage();
    y = 20;
  }

  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  doc.text(
    "Thank you for choosing Harvoya. Have a safe and memorable journey!",
    20,
    y
  );

  // Save PDF
  doc.save("Harvoya_Trip_Plan.pdf");
};

export default downloadTripPDF;