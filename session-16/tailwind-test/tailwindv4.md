Here's a simple three-page website setup with Tailwind CSS classes. Each page contains a basic structure to help you see Tailwind in action after installation. Follow the setup steps, then use these files to test Tailwind.

### Steps to Install Tailwindv4 with NPM & Tailwind CLI
https://tailwindcss.com/docs/installation/tailwind-cli

1. **Initialise NPM**:

   ```bash
   npm init -y
   ```

2. **Install Tailwind**:

   ```bash
   npm install tailwindcss @tailwindcss/cli
   ```

3. **Create a Tailwind Configuration File**:

   ```bash
   npx tailwindcss init
   ```

4. **Configure Tailwind Paths** in `tailwind.config.js`:

   ```js
    module.exports = {
     content: ["*.html", "./src/**/*.{css,js,jsx,ts,tsx}"],
    };
   ```

5. **Create a CSS File for Tailwind** (e.g., `input.css`):

   ```css
    @import "tailwindcss";
   ```

6. **Build Tailwind CSS**:

   ```bash
   npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch
   ```
   Running from npm not npx, add a script to your package.json
   ```bash```
    "scripts": {
        "build:css": "tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch"
    },

   ```

After setting up these files, run your Tailwind build command (`npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch`), and you should see Tailwind styles applied to your pages!

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html", "./src/**/*.{css,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1D4ED8", // Tailwind's 'blue-700'
                secondary: "#9333EA", // Tailwind's 'purple-600'
            },
        },
    },
};
```

## Efficiencies.btn {
```css
@theme {
    --color-primary: #1D4ED8;
    --color-secondary: #9333EA;

    --animate-slow-spin: slow-spin 3s linear infinite;

    @keyframes slow-spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }
}
.btn {
    @apply mt-4 transform rounded bg-green-500 px-4 py-2 font-bold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110;
}

```

```html
<button class="btn"></button>
```

**vscode:tailwind css intellisense**
autocompletion, class name previews, and even shows colors and spacing, speeding up the class selection process.

- prettier code sorting
  link: https://tailwindcss.com/blog/automatic-class-sorting-with-prettier

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

```.prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Summary of Features Used

Each page includes distinct Tailwind CSS features:

- **Responsive Design**: Navbar on all pages and background color on `index.html`.
- **Dark Mode**: Enabled on all pages by toggling the dark class.
- **Custom Theme Colors**: Custom primary and secondary colors used on buttons and background sections.
- **Hover, Focus, and Active States**: Button effects in each page for interactivity.
- **Flexbox and Grid Utilities**: Flex layout on `index.html`, Grid layout on `about.html`.
- **Transitions and Transformations**: Buttons with hover effects on `about.html`.
- **Typography**: Custom serif fonts on `about.html`.
- **Shadows and Rounded Corners**: Box with shadow and rounded corners on `about.html`.
- **Custom Animations**: Spin effect on `contact.html`.
- **Form Styling**: Tailwind Forms plugin used for inputs on `contact.html`.
