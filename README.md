#LMS Frontend

### Setup Instruction

1. clone the project

'''

    https://github.com/sandeepkrmehta/lms-frontend
'''


2. move into directory

'''

    cd lms-frontend
'''

3. install dependencies

'''

    npm i
'''

4. run the server

'''

    npm run dev 
'''


### Setup Instruction for tailwind

[Tail wind official doc] (https://tailwindcss.com/docs/installation)


1. Install Tailwindcss

'''

    npm install -D tailwindcss
'''

2. Create Tailwind Config file

'''

    npx tailwindcss init
'''

3. Add file extension to tailwind config file in the content property

'''

    ./src/**/*.{html,js,jsx,ts,tsx}" , "./index.html",

'''

4. Add the tailwind directives at the top of the "index.css" file

'''

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
'''
5. Add the following details in the pluging of tailwind config

'''

require("daisyui"), require("@tailwindcss/line-clamp")
'

### Adding pluggings and dependencies

'''

    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
'''

### Configure auto import sort eslint

1. Install simple import sort

'''

    npm i -D eslint-plugin-simple-import-sort
'''

2. Add Rule in '.eslintrc.cjs'

'''

    'simple-import-sort/imports': 'error',    
'''

2. add simple-import sort plugin in '.eslintrc.cjs'

'''

    plugins: ['...', 'simple-import-sort']
'''

4. To enable auto import sort on file save in vs code
    -open 'settings.json'
    -add the following config
    
'''

    "editor.codeActionOnSave": {
        "source.fixAll.eslint": true
    }
'''

