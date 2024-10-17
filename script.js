// Initial data for train locations and delivery status simulation
const mockTrainLocations = ["Station A", "Station B", "Station C", "Station D"];
const vendorsAtStations = {
    "Station A": "Vendor A",
    "Station B": "Vendor B",
    "Station C": "Vendor C",
    "Station D": "Vendor D"
};
let locationIndex = 0;

// Train tracking simulation
function updateTrainLocation() {
    const trainLocationDisplay = document.getElementById('train-location');
    if (trainLocationDisplay) {
        trainLocationDisplay.innerText = mockTrainLocations[locationIndex];
    }

    // Display vendor availability at the current station
    const vendorList = document.getElementById('vendor-list');
    if (vendorList) {
        const currentVendor = vendorsAtStations[mockTrainLocations[locationIndex]];
        vendorList.innerHTML = `<p>Available Vendor: ${currentVendor}</p>`;
    }

    locationIndex = (locationIndex + 1) % mockTrainLocations.length;
}

// Set interval to simulate real-time train location updates
setInterval(updateTrainLocation, 5000); // Updates every 5 seconds

// Pre-booking order handling
document.getElementById('order-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const trainNumber = document.getElementById('trainNumber').value;
    const station = document.getElementById('station').value;
    const orderTime = document.getElementById('orderTime').value;
    const coach = document.getElementById('coach').value;
    const seat = document.getElementById('seat').value;

    // Simple confirmation message for the order
    const orderStatus = document.getElementById('order-status');
    if (orderStatus) {
        orderStatus.innerText = `Order placed! Train ${trainNumber} will receive delivery at ${station} 
                                 around ${orderTime} in Coach ${coach}, Seat ${seat}.`;
    }

    // Simulate notifications for delivery update and train staff collaboration
    setTimeout(() => sendNotification("Order confirmed and is being prepared."), 2000);
    setTimeout(() => sendNotification(`Preparing for delivery at ${station}.`), 5000);
    setTimeout(() => {
        sendNotification("Delivery staff ready at platform for quick handover.");
        sendNotification(`Train staff informed to assist with delivery at ${station}.`);
    }, 8000);
    setTimeout(() => sendNotification("Order successfully delivered!"), 10000);
    setTimeout(() => sendNotification("Train attendants will assist in delivering food directly to the door."), 11000);
    setTimeout(() => sendNotification("Pre-determined delivery point: near Coach entrance."), 12000);
    setTimeout(() => sendNotification("Please be ready to receive your food as instructed."), 13000);
});

// Display notifications in the "Delivery Updates" section
function sendNotification(message) {
    const notifications = document.getElementById('notifications');
    if (notifications) {
        const notification = document.createElement('p');
        notification.innerText = message;
        notifications.appendChild(notification);
    }
}

// Lightbox Functionality
const lightboxContent = {
    advanceOrder: "With Advance Orders, you can pre-schedule your meal to be ready and waiting for you at any station.",
    onTrainVendors: "Our On-Train Vendors offer a quick snack service with popular dishes on board.",
    collabRestaurants: "Local Restaurants along the route collaborate with us to ensure fresh meals at key stations.",
    smartPackaging: "We use high-quality, insulated packaging to keep your food fresh and warm.",
    snackBox: "Order a Snack Box for quick delivery, perfect for short stops.",
    doorToDoor: "Door-to-Door Delivery: Our train attendants will coordinate with delivery staff to bring food directly to your AC coach door.",
    preDeterminedPoints: "Pre-Determined Delivery Points: Convenient delivery points are set up near the AC coach entrances for quick pickup.",
    supplierPartnerships: "Supplier Partnerships: Collaborate with reputable MRE manufacturers to secure a steady supply of quality meals. Establish agreements for bulk orders and regular replenishments.",
    centralizedDistribution: "Centralized Distribution Centers: Set up distribution centers near major railway hubs for timely MRE delivery. Ensure facilities for quality preservation and real-time inventory tracking."
};

function openLightbox(feature) {
    const lightboxText = document.getElementById('lightbox-text');
    const lightbox = document.getElementById('lightbox');
    if (lightboxText && lightbox) {
        lightboxText.innerText = lightboxContent[feature];
        lightbox.style.display = 'block';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// Function to analyze train schedules
function analyzeSchedules() {
    const scheduleAnalysis = document.getElementById('schedule-analysis');
    if (scheduleAnalysis) {
        scheduleAnalysis.innerHTML = "<p>Identifying peak and non-peak times...</p>";

        // Simulate analysis with a delay
        setTimeout(() => {
            scheduleAnalysis.innerHTML = "<p>Peak hours: 7:00 AM - 9:00 AM, 5:00 PM - 7:00 PM. Non-peak hours: 10:00 AM - 4:00 PM.</p>";
        }, 2000);
    }
}

// Function to coordinate with railway authorities
function coordinateRailways() {
    const railwayCoordination = document.getElementById('railway-coordination');
    if (railwayCoordination) {
        railwayCoordination.innerHTML = "<p>Contacting railway authorities...</p>";

        // Simulate coordination with a delay
        setTimeout(() => {
            railwayCoordination.innerHTML = "<p>Successfully coordinated with railway authorities. Insights gained for station-specific peak hours.</p>";
        }, 2000);
    }
}

// Function to create a delivery timetable
function createTimetable() {
    const timetable = document.getElementById('timetable');
    if (timetable) {
        timetable.innerHTML = "<p>Generating delivery timetable...</p>";

        // Simulate timetable creation with a delay
        setTimeout(() => {
            timetable.innerHTML = `
                <p>Delivery Timetable:</p>
                <ul>
                    <li>Station A: 11:00 AM - 12:00 PM</li>
                    <li>Station B: 2:00 PM - 3:00 PM</li>
                    <li>Station C: 3:30 PM - 4:30 PM</li>
                </ul>
                <p>Deliveries scheduled outside peak hours to avoid congestion.</p>
            `;
        }, 2000);
    }
}

// Function to simulate pilot runs and gather feedback
function runPilot() {
    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.innerHTML = "<p>Conducting pilot run...</p>";

        // Simulate feedback collection
        setTimeout(() => {
            feedback.innerHTML = `
                <p>Pilot run completed successfully. Feedback collected:</p>
                <ul>
                    <li>Staff feedback: "Delivery timings are efficient."</li>
                    <li>Passenger feedback: "Minimal disruptions, smooth process."</li>
                </ul>
                <p>Adjustments will be made based on feedback.</p>
            `;
        }, 3000);
    }
}

// Open and close details for each section
function openDetails(id) {
    const detailsDiv = document.getElementById(id);
    if (detailsDiv) {
        detailsDiv.style.display = detailsDiv.style.display === "none" || !detailsDiv.style.display ? "block" : "none";
        if (detailsDiv.style.display === "block") {
            loadDetails(id);
        }
    }
}

// Load details dynamically based on the selected section
function loadDetails(id) {
    let content = '';
    switch (id) {
        case 'requirementsDetails':
            content = `<ul>
                        <li>Real-time tracking for delivery vehicles</li>
                        <li>Route optimization based on traffic data</li>
                        <li>Dynamic scheduling to adjust delivery times</li>
                       </ul>`;
            break;
        case 'researchDetails':
            content = `<p>Evaluate software such as FarEye, Networkon, and Cigo Tracker based on features, user reviews, and compatibility with your existing systems.</p>`;
            break;
        case 'integrationDetails':
            content = `<p>Ensure the software integrates with your inventory management, order processing, and GPS tracking systems seamlessly. Work with your software provider to set up data synchronization.</p>`;
            break;
        case 'configDetails':
            content = `<p>Customize the software to match your delivery needs. Configure routes, schedules, alerts, and notifications for real-time updates.</p>`;
            break;
        case 'trainingDetails':
            content = `<p>Train your staff to use the software effectively. Ensure they know how to interpret real-time data and adjust routes or schedules as needed.</p>`;
            break;
        case 'pilotDetails':
            content = `<p>Conduct a pilot test to ensure the software works effectively in real-world conditions. Gather feedback from staff and adjust settings as necessary.</p>`;
            break;
        case 'fullDetails':
            content = `<p>Once the pilot test is successful, implement the software across your entire delivery network. Monitor performance continuously and make adjustments.</p>`;
            break;
        case 'monitorDetails':
            content = `<p>Review the software’s performance regularly and keep up with updates to ensure it continues to meet your delivery operation needs.</p>`;
            break;
    }
    document.getElementById(id).innerHTML = content;
}
