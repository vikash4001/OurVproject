// Sample data for dynamic projects
const projects = [
    { title: "Genderless Kei – Japan's Hot", description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it's offering lots of ..." },
    { title: "Better Strategy & Quality", description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it's offering lots of ...", },
    { title: "Another Project", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    // Add more projects as needed
];

// Function to populate project cards dynamically
function populateProjectCards() {
    const projectListElement = $("#projectList");

    // Clear existing content
    projectListElement.empty();

    // Iterate through projects and create project cards
    projects.forEach((project, index) => {
        const cardBackgroundColor = project.backgroundColor || "#fff";
        const cardColor = project.color || "#000";

        const projectCard = $(`
            <div class="project-card" style="background-color: ${cardBackgroundColor}; color: ${cardColor}; cursor: pointer;" onclick="selectProject(${index})">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `);

        projectListElement.append(projectCard);
    });
}

// Function to handle selection of project card
function selectProject(projectIndex) {
    // Reset background color for all project cards
    $(".project-card").css({
        "background-color": "#fff",
        "color": "#000"
    });

    // Set background color for the selected project card
    const selectedCard = $(".project-card").eq(projectIndex);
    selectedCard.css({
        "background-color": selectedCard.data("background-color") || "#e74c3c",
        "color": selectedCard.data("color") || "white"
    });

    // Change image based on project index
    changeImage(projectIndex);
}

// Function to change the image based on project index
function changeImage(projectIndex) {
    const project = projects[projectIndex];
    const projectImageElement = $("#projectImage");

    // Example: Change image source based on project details
    if (project.title === "Genderless Kei – Japan's Hot") {
        projectImageElement.attr("src", "middle1.png");
    } else if (project.title === "Better Strategy & Quality") {
        projectImageElement.attr("src", "middle2.png");
    } else {
        projectImageElement.attr("src", "bottom.png");
    }
}

// Call function to populate project cards initially
$(document).ready(function() {
    populateProjectCards();
});
