const readline = require("readline"); //node module to read input from the terminal
const connectDBFuelMap = require("../dbConfig/dbFuelMap"); //function connects to mongodb database
const Station = require("../models/stationsModel"); //mongoose model for DB collection

// readline interface for reading user input and writing output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Displays question in terminal and waits for response
// Wrapped in a promise to make it work with async/await (easier to manage multiple prompts sequentially)
const promptUser = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

// ADD STATION FUNCTION //
const addStation = async () => {
  try {
    // Connect to the database
    await connectDBFuelMap();

    // Prompt the user for the required station information
    const name = await promptUser("Station Name: ");
    const address = await promptUser("Address: ");
    const suburb = await promptUser("Suburb: ");
    const city = await promptUser("City: ");
    const latitude = parseFloat(await promptUser("Latitude: "));
    const longitude = parseFloat(await promptUser("Longitude: ")); // parse float converts string to numbers
    const phone = await promptUser("Phone: ");
    const servicesInput = await promptUser(
      "Services (separate by comma, no spaces): "
    );
    const nearbySuburbsInput = await promptUser(
      "Nearby Suburbs (separate by comma, no spaces): "
    );

    // Process the services and nearby suburbs inputs into arrays
    const servicesOffered =
      servicesInput.length > 0 ? servicesInput.split(",") : [];
    const nearbySuburbs =
      nearbySuburbsInput.length > 0 ? nearbySuburbsInput.split(",") : [];

    // ADDITIONAL DATA FOR HOURS AND COORDINATES

    // Prompting for the hours of operation for each day
    const hours = {
      sunday: await promptUser("Enter Sunday hours: "),
      monday: await promptUser("Enter Monday hours: "),
      tuesday: await promptUser("Enter Tuesday hours: "),
      wednesday: await promptUser("Enter Wednesday hours: "),
      thursday: await promptUser("Enter Thursday hours: "),
      friday: await promptUser("Enter Friday hours: "),
      saturday: await promptUser("Enter Saturday hours: "),
    };

    // Storing coordinates as an object with lat and lng
    const coordinates = {
      lat: latitude,
      lng: longitude,
    };

    // Create a new station object with inputted data, including new hours and coordinates
    const newStation = new Station({
      name,
      address,
      suburb,
      city,
      phone,
      servicesOffered,
      nearbySuburbs,
      hours, // added hours field
      coordinates, // added coordinates field
    });

    // Save the new station to the database
    await newStation.save();
    console.log("✅ Station added successfully!");
  } catch (error) {
    // Log any errors that occur during the process
    console.error("❌ Error adding station:", error.message);
  } finally {
    // Close the readline interface after the process is complete
    rl.close();
  }
};

addStation();
