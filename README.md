Here's an updated `README.md` that includes the environment variables:

````markdown
# Project Template

This project is a template for creating modern React applications using Vite. It includes essential libraries and tools for a streamlined development process.

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/najim2004/clothmart-client.git
   cd project-template
   ```
````

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of your project and add the following variables:

   ```env
   VITE_APIKEY=your-api-key
   VITE_AUTHDOMAIN=your-auth-domain
   VITE_PROJECTID=your-project-id
   VITE_STORAGEBUCKET=your-storage-bucket
   VITE_MESSAGINGSENDERID=your-messaging-sender-id
   VITE_APPID=your-app-id
   VITE_BASEURL=your-base-url
   ```

   Replace the placeholder values with your actual environment-specific information.

## Running the Project Locally

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   This command starts the app in development mode.  
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

2. **Build the project for production:**

   ```bash
   npm run build
   ```

   This command creates an optimized build in the `dist` folder.

3. **Preview the production build:**

   ```bash
   npm run preview
   ```

   This serves the production build locally for testing purposes.

4. **Lint the project:**

   ```bash
   npm run lint
   ```

   This command runs ESLint to check for any linting issues in your code.

```

This `README.md` includes instructions for setting up the necessary environment variables along with the basic steps for running the project locally.
```
