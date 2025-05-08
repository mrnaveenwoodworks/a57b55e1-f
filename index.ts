// Define available greetings
const greetings: string[] = [
  "Hello, World!",
  "Howdy, World!",
  "Greetings, World!",
  "Welcome to TypeScript!",
  "TypeScript says hi!"
];

// DOM elements
let greetingElement: HTMLElement;
let changeButton: HTMLElement;

// Current greeting index
let currentGreetingIndex: number = 0;

// Function to update greeting text
function updateGreeting(): void {
  if (greetingElement) {
    greetingElement.textContent = greetings[currentGreetingIndex];
  }
}

// Function to change to the next greeting
function changeGreeting(): void {
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  updateGreeting();
}

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', (): void => {
  // Get DOM elements
  greetingElement = document.getElementById('greeting') as HTMLElement;
  changeButton = document.getElementById('changeButton') as HTMLElement;
  
  // Set initial greeting
  updateGreeting();
  
  // Add event listener to button
  if (changeButton) {
    changeButton.addEventListener('click', changeGreeting);
  }
  
  console.log('TypeScript Hello World app initialized!');
});